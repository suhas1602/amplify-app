import { API } from "aws-amplify";

export const getItems = async () => {
  const apiName = "TodoAmplifyAPI";
  const path = "/items";

  return await API.get(apiName, path, {});
};

export const createItem = async item => {
  const apiName = "TodoAmplifyAPI";
  const path = "/items";
  const init = {
    body: {
      ...item
    },
  };

  return await API.put(apiName, path, init);
};

export const deleteItem = async id => {
  const apiName = "TodoAmplifyAPI";
  const path = `/items/object/${id}`;

  return await API.del(apiName, path, {});
};
