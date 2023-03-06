import admin from 'firebase-admin';

import serviceAccount from '../../anyatutors_credentials.json' assert{ type: "json"};

var uid = process.argv[2]
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

admin.auth().setCustomUserClaims(uid, { admin: true })
    .then(() => {
        console.log('custom claim set for user:', uid)
        process.exit()
    })
    .catch(error => {
        console.log(error);
        process.exit(1)
    })