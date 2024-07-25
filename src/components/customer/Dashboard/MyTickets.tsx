import { useState } from "react";
import { customerSupportApi } from "../../../redux/customerAPI";
import { TCustomerSupport } from "../../../types";

const MyTickets = () => {
  const {
    data: tickets,
    error,
    isLoading,
  } = customerSupportApi.useGetCustomerSupportQuery();
  const [createCustomerSupport] =
    customerSupportApi.useCreateCustomerSupportMutation();
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const handleCreateTicket = async () => {
    if (subject && description) {
      await createCustomerSupport({ subject, description, status });
      setSubject("");
      setDescription("");
      setStatus("");
    } else {
      alert("Subject and description are required");
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Create New Ticket</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCreateTicket();
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Status</label>
            <input
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Create Ticket
          </button>
        </form>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">My Tickets</h3>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">Error loading tickets</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b-2">Subject</th>
                  <th className="px-4 py-2 border-b-2">Description</th>
                  <th className="px-4 py-2 border-b-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {tickets?.map((ticket: TCustomerSupport) => (
                  <tr key={ticket.ticket_id}>
                    <td className="px-4 py-2 border-b">{ticket.subject}</td>
                    <td className="px-4 py-2 border-b">{ticket.description}</td>
                    <td className="px-4 py-2 border-b">{ticket.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyTickets;
