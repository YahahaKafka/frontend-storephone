import React from 'react';
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [messageError, setMessageError] = useState("");

  const namePattern = /^[A-Za-z\s]*$/;
  const messagePattern = /^[A-Za-z0-9\s\!?\.,;:()\[\]{}'"\/\\]*$/;

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (!namePattern.test(value)) {
      setNameError("Nama hanya boleh huruf dan spasi.");
    } else {
      setNameError("");
    }
    setName(value);
  };

  const handleMessageChange = (e) => {
    const value = e.target.value;
    const character = value.trim().length;
    if (character > 1000) {
      setMessageError("Pesan tidak boleh lebih dari 1000 Karakter.");
    } else if (!messagePattern.test(value)) {
      setMessageError("Pesan hanya boleh huruf, angka, spasi dan simbol: ! ? , . ; : ( ) [ ] { } ' \" / \\");
    } else {
      setMessageError("");
    }
    setMessage(value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (nameError || messageError) {
      alert("Tolong perbaiki input sebelum mengirim.");
      return;
    }

    emailjs.sendForm(
      "service_m9vqml8",
      "template_gasvit8",
      e.target,
      "TlYZSiQy3j5IvRghM"
    ).then(
      (result) => {
        alert("Pesan berhasil dikirim!");
        console.log(result.text);
        e.target.reset();
        setName("");
        setMessage("");
      },
      (error) => {
        alert("Gagal mengirim pesan.");
        console.log(error.text);
      }
    );
  };

  return (
    <div id="contact" className="bg-gray-300 min-h-screen py-15 px-20">
      <div className='py-10'>
        <h1 className="text-3xl font-bold mb-6">Hubungi Kami</h1>
        <div className="flex flex-col md:flex-row gap-20">
          
          {/* Deskripsi dan Info Kontak */}
          <div className='flex-1 text-justify'>
            <p className="mb-6">
              Kami di <strong>storePHONE</strong> selalu siap membantu Anda. Jika Anda memiliki pertanyaan seputar produk, 
              membutuhkan bantuan dalam proses pemesanan, atau ingin memberikan saran dan masukan, jangan ragu untuk menghubungi kami.
              Tim kami akan merespons setiap pesan Anda secepat mungkin pada jam operasional berikut:
            </p>
            <ul className="mb-6 list-disc ml-4">
              <li><strong>Senin – Jumat:</strong> 09.00 – 17.00</li>
              <li><strong>Sabtu:</strong> 09.00 – 13.00</li>
              <li><strong>Minggu & Hari Libur:</strong> Tutup</li>
            </ul>

            <div className="flex items-center gap-2 mb-3">
              <MdEmail className="text-xl" />
              <a href="mailto:support@storephone.id" className="text-blue-600 hover:underline">
                support@storephone.id
              </a>
            </div>

            <div className="flex items-center gap-2">
              <FaWhatsapp className="text-xl text-green-600" />
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                +62 812-3456-7890
              </a>
            </div>
          </div>

          {/* Form Kontak */}
          <div className="flex-1">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 max-w-md">
              <input
                type="text"
                name="name"
                placeholder="Nama Anda"
                required
                value={name}
                onChange={handleNameChange}
                className="p-2 border w-full normal-case"
              />
              {nameError && <span className="text-red-600 text-sm -mt-2">{nameError}</span>}

              <input
                type="email"
                name="email"
                placeholder="Email Anda"
                required
                className="p-2 border w-full lowercase placeholder:normal-case"
              />

              <textarea
                name="message"
                placeholder="Pesan Anda"
                rows="5"
                required
                value={message}
                onChange={handleMessageChange}
                className="p-2 border w-full"
              />
              <p className="text-sm text-gray-600">{message.trim().length} / 1000 Karakter</p>
              {messageError && <span className="text-red-600 text-sm -mt-2">{messageError}</span>}

              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:cursor-pointer">
                Kirim
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
