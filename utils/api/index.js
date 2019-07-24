import { API } from "aws-amplify";

export const getItems = () => {
  const apiName = "TodoAmplifyAPI";
  const path = "/items";

  return API.get(apiName, path, {});
};

export const getItem = (id) => {
  const apiName = "TodoAmplifyAPI";
  const path = `/items/object/${id}`;

  return API.get(apiName, path, {});
}

export const createItem = item => {
  const apiName = "TodoAmplifyAPI";
  const path = "/items";
  const init = {
    body: {
      ...item
    },
  };

  return API.put(apiName, path, init);
};

export const deleteItem = id => {
  const apiName = "TodoAmplifyAPI";
  const path = `/items/object/${id}`;

  return API.del(apiName, path, {});
};
