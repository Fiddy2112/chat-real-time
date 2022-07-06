import React, { useState } from "react";
import {
  onSnapshot,
  collection,
  query,
  orderBy,
  where,
} from "firebase/firestore";
import { db } from "../firebase/config";

export const useFirestore = (collect, condition) => {
  const [documents, setDocuments] = useState([]);

  //   React.useEffect(() => {
  //     const collectionRef = collection(db, "rooms");
  //     onSnapshot(collectionRef, (snapshot) => {
  //       const data = snapshot.docs.map((doc) => ({
  //         ...doc.data(),
  //         id: doc.id,
  //       }));
  //       console.log({ data, snapshot, docs: snapshot.docs });
  //     });
  //   }, []);

  React.useEffect(() => {
    const collectionRef = collection(db, collect);

    //condition
    /*
    {
    fieldName: 'abc'
    operator: '=='
    compareValue: 'adb'
}
    */
    if (condition) {
      if (
        !condition.fieldName ||
        !condition.compareValue ||
        !condition.operator
      ) {
        return;
      }
      query(
        collectionRef,
        where(condition.fieldName, condition.operator, condition.compareValue),
        orderBy("createdAt")
      );
    }

    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      const documents = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDocuments(documents);
    });

    return unsubscribe;
  }, [collect, condition]);

  return documents;
};
