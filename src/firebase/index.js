/**
 * Firebase設定
 *
 * @since 0.0.1
 * @version 0.0.1
 * @author MPWEI
 * @date 2020/01/23
 */

import Vue from 'vue'
import VueFirestore from 'vue-firestore'
import Firebase from 'firebase'

require('firebase/firestore')

Vue.use(VueFirestore)

const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyD0BuSyCOWGiobZl44vBzz_19xXLFuiCNw",
    projectId: "mpwei-2889f"
})

export const firestore = firebaseApp.firestore(),
    storage = firebaseApp.storage()