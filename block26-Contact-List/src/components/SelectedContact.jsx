import { useState, useEffect } from "react";

export default function SelectedContact({
  setSelectedContactId,
  selectedContactId,
}) {
  const [contact, setContact] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          ` https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
        setSelectedContactId(result);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchContact();
  }, []);

  return (
    <>
      {!isLoading && (
        <table>
          <thead>
            <tr>
              <th colSpan="2">{contact.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Username:</td>
              <td>{contact.username}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{contact.email}</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>{contact.phone}</td>
            </tr>
            <tr>
              <td>Website:</td>
              <td>{contact.website}</td>
            </tr>
            <tr>
              <td colSpan="2">
                <button
                  onClick={() => {
                    setContact(null);
                    setSelectedContactId(null);
                  }}
                >
                  Close
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
}
