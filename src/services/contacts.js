import axios from "../utils/axios";

export const addContact = async (payload) =>
  await axios.post(
    "/contacts",
    {
      ...payload,
    },
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

export const getContacts = async (payload) =>
  await axios.get("/contacts", {
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export const updateContact = async (id, payload) =>
  await axios.put(
    `/contacts/${id}`,
    {
      ...payload,
    },
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

export const deleteContact = async (id) =>
  await axios.delete(
    `/contacts/${id}`,
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
