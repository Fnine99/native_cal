import { useState, useEffect } from 'react';
import firestore from 'api/firestore';
// import { doc, collection } from 'firebase/firestore';

export const InitUser = (uid:string) => {
    firestore.collection('users').doc().set({
       id: uid 
    });
}