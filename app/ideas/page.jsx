'use client'
// as i am validating the form on the CSR 
import { useForm } from 'react-hook-form';

function FileUploadForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('college', data.college);
    formData.append('phone_number', data.phoneNumber);
    formData.append('file', data.file[0]); // Access the first uploaded file

    // Submit form data (e.g., send to a server-side API route)
    console.log(formData);
  };

  return (
    <>
    <div className="container p-5">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
    <div className="flex flex-col">
      <label htmlFor="name" className="text-sm font-medium text-gray-700">
        Name:
      </label>
      <input
        type="text"
        {...register('name', { required: true })}
        className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
      {errors.name && <span className="text-red-500 text-xs">Please enter your name.</span>}
    </div>

    <div className="flex flex-col">
      <label htmlFor="email" className="text-sm font-medium text-gray-700">
        Email:
      </label>
      <input
        type="email"
        {...register('email', { required: true })}
        className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      />
      {errors.email && <span className="text-red-500 text-xs">Please enter a valid email address.</span>}
    </div>

    <div className="flex flex-col">
      <label htmlFor="college" className="text-sm font-medium text-gray-700">
        College:
      </label>
      <input
        type="text"
        {...register('college', { required: true })}
        className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      />
      {errors.college && <span className="text-red-500 text-xs">Please enter your college name.</span>}
    </div>

    <div className="flex flex-col">
      <label htmlFor="phone_number" className="text-sm font-medium text-gray-700">
        Phone Number:
      </label>
      <input
        type="tel"
        {...register('phone_number', { required: true })}
        className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
      {errors.phone_number && <span className="text-red-500 text-xs">Please enter your phone number.</span>}
    </div>

    <div className="flex flex-col">
      <label htmlFor="file" className="text-sm font-medium text-gray-700">
        File Upload:
      </label>
      <input
        type="file"
        {...register('file', { required: true })}
        className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      />
      {errors.file && <span className="text-red-500 text-xs">Please select a file to upload.</span>}
    </div>

    <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">
      Submit
    </button>
  </form>
  </div>

    </>
  );
}


export default FileUploadForm;
