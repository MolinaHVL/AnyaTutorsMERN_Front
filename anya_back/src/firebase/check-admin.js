import admin from 'firebase-admin';

import serviceAccount from '../../anyatutors_credentials.json' assert{ type: "json"};

const uid = process.argv[2]
const claim = "admin"

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

admin.auth().getUser(uid)
    .then((userRecord) => {
        const customClaims = userRecord.customClaims;
        if (customClaims && customClaims[claim]) {
            console.log(`${uid} has the ${claim} claim`);
        } else {
            console.log(`${uid} has NOT the ${claim} claim`);
        }
    })
    .catch((error) => {
        console.log("error fetching user data", error);
    })