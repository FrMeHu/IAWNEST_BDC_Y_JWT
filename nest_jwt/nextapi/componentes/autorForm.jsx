"use client"

import { useState } from "react"

export default function AutorForm({ onSubmit }) {
  const [nombre, setNombre] = useState("")
  const [biografia, setBiografia] = useState("")
  const [fotoUrl, setFotoUrl] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Creamos un objeto con los datos del autor
    const autorData = {
      nombre,
      biografia,
      fotoUrl,
    }
    // Enviamos el objeto en lugar de FormData
    onSubmit(autorData)
    setNombre("")
    setBiografia("")
    setFotoUrl("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* ...resto del formulario permanece igual... */}
      <div>
        <label htmlFor="nombre" className="block">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label htmlFor="biografia" className="block">
          Biografía
        </label>
        <textarea
          id="biografia"
          value={biografia}
          onChange={(e) => setBiografia(e.target.value)}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label htmlFor="fotoUrl" className="block">
          URL de la foto
        </label>
        <input
          type="url"
          id="fotoUrl"
          value={fotoUrl}
          onChange={(e) => setFotoUrl(e.target.value)}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Guardar Autor
      </button>
    </form>
  )
}
