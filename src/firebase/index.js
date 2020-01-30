/**
 * Firebase
 *
 * @since 0.0.1
 * @version 0.0.1
 * @author MPWEI
 * @date 2020/01/23
 */

import Vue from 'vue'
import VueFirestore from 'vue-firestore'
import Firebase from 'firebase'
import FirebaseConfig from './config'

require('firebase/firestore')

Vue.use(VueFirestore)

const firebaseApp = Firebase.initializeApp({
    apiKey: FirebaseConfig.apiKey,
    storageBucket: FirebaseConfig.storageBucket,
    projectId: FirebaseConfig.projectId
})

export const firestore = firebaseApp.firestore(),
    storage = firebaseApp.storage()