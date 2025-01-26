import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { environment } from '../../environments/environment';

const app = initializeApp(environment.firebaseConfig);

const database = getDatabase(app);
