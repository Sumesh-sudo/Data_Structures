import { db, auth, provider, signInWithPopup } from './firebase-config.js';
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore-lite.js';

window.login = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    document.getElementById('uploadForm').classList.remove('hidden');
  } catch (error) {
    alert('Login failed');
  }
};

document.getElementById('uploadForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const module = document.getElementById('module').value;
  const description = document.getElementById('description').value;
  const link = document.getElementById('link').value;

  try {
    await addDoc(collection(db, 'materials'), {
      module,
      description,
      link
    });
    alert('Material uploaded successfully!');
  } catch (error) {
    alert('Upload failed');
  }
});