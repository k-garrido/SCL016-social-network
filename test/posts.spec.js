import MockCloudFirebase from 'mock-cloud-firestore';
import { savePost } from '../src/lib/firebase.js';

const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        axxYZ12: {
          title: 'Mi trekking en Torres del Paine',
          content: 'Mi viaje comenzo el 10 de enero y fue lo mas hermoso del mundo',
          typePost: 'memories',
          regionPost: 'biobio'
        }
      }
    },
  }
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

