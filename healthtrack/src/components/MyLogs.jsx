import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
} from 'firebase/firestore';
import { db } from '../firebase';

const MyLogs = () => {
  const [logs, setLogs] = useState([]);
  const [editingLog, setEditingLog] = useState(null);
  const [editedSymptoms, setEditedSymptoms] = useState('');
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    fetchLogs();
  }, [user]);

  const fetchLogs = async () => {
    if (!user) return;
    const q = query(collection(db, 'healthLogs'), where('userId', '==', user.uid));
    try {
      const querySnapshot = await getDocs(q);
      const userLogs = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setLogs(userLogs);
    } catch (error) {
      console.error('Error fetching logs:', error);
    }
  };

  const handleDelete = async (logId) => {
    try {
      await deleteDoc(doc(db, 'healthLogs', logId));
      fetchLogs();
    } catch (error) {
      console.error('Error deleting log:', error);
    }
  };

  const handleEditClick = (log) => {
    setEditingLog(log);
    setEditedSymptoms(log.symptoms);
  };

  const handleUpdate = async () => {
    try {
      await updateDoc(doc(db, 'healthLogs', editingLog.id), {
        symptoms: editedSymptoms
      });
      setEditingLog(null);
      fetchLogs();
    } catch (error) {
      console.error('Error updating log:', error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">My Health Logs</h2>
      {logs.length === 0 ? (
        <p>No health logs found.</p>
      ) : (
        <ul className="space-y-4">
          {logs.map(log => (
            <li key={log.id} className="bg-white p-4 rounded shadow">
              <p><strong>Date:</strong> {log.date}</p>

              {editingLog?.id === log.id ? (
                <>
                  <label className="block mb-2 font-medium">Symptoms:</label>
                  <input
                    className="border p-2 w-full mb-2"
                    value={editedSymptoms}
                    onChange={(e) => setEditedSymptoms(e.target.value)}
                  />
                  <button
                    className="bg-green-500 text-white px-4 py-1 rounded mr-2"
                    onClick={handleUpdate}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-300 px-4 py-1 rounded"
                    onClick={() => setEditingLog(null)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <p><strong>Symptoms:</strong> {log.symptoms}</p>
                  <p><strong>Medications:</strong> {log.medications}</p>
                  <p><strong>Temperature:</strong> {log.temperature} °C</p>
                  <p><strong>Heart Rate:</strong> {log.heartRate} bpm</p>
                  <p><strong>Blood Pressure:</strong> {log.bloodPressure}</p>
                  <p><strong>Glucose:</strong> {log.glucose} mg/dL</p>

                  <div className="mt-2">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                      onClick={() => handleEditClick(log)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded"
                      onClick={() => handleDelete(log.id)}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyLogs;
