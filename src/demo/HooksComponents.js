import React, { useEffect, useState } from 'react';

const getUserFeatures = async (userId, onGetUserFeatures) => {
  const response = await Promise.resolve(`${userId} user features`);
  onGetUserFeatures(response);
}

const useUserFeatures = userId => {
  const [userFeatures, setUserFeatures] = useState(null);

  useEffect(() => {
    getUserFeatures(userId, setUserFeatures);
  }, [userId]);

  return userFeatures;
}

export const HookComponent0 = ({ userId }) => {
  const userFeatures = useUserFeatures(userId);
  return <h3>Hook Component 0: {userFeatures}</h3>;
};
