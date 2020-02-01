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

Vue.use(VueFirestore)

const firebaseApp = Firebase.initializeApp({
    apiKey: FirebaseConfig.apiKey,
    authDomain: FirebaseConfig.authDomain,
    storageBucket: FirebaseConfig.storageBucket,
    projectId: FirebaseConfig.projectId,
    appId: FirebaseConfig.appId,
    messagingSenderId: FirebaseConfig.messagingSenderId,
    measurementId: FirebaseConfig.measurementId
})

firebaseApp.analytics()

export const firestore = firebaseApp.firestore(),
    storage = firebaseApp.storage(),
    analytics = firebaseApp.analytics()