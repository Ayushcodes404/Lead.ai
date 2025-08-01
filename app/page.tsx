"use client"

import type React from "react"
import { useRef, useState } from "react"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"

export default function ImportPage() {
  const [dragOver, setDragOver] = useState(false)
  const [progress, setProgress] = useState(0)
  const [fileName, setFileName] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    const file = e.dataTransfer.files[0]
    if (file) {
      handleFileUpload(file)
    }
  }

  const handleFileUpload = (file: File) => {
    setFileName(file.name)
    // Simulate progress update
    setProgress(0)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleFileUpload(file)
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="flex min-h-screen bg-blue-600">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-8 bg-gray-200 min-h-screen">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Import New Leads</h1>

          <div className="max-w-6xl mx-auto">
            <div
              className={`border-4 border-dashed border-gray-600 rounded-2xl p-20 text-center bg-white transition-colors ${
                dragOver ? "border-blue-500 bg-blue-50" : ""
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Drag and Drop new Lead File</h2>
              <p className="text-gray-600 text-xl mb-8">CSV or Excel File</p>
              
              <Button
                onClick={triggerFileInput}
                className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-xl font-semibold rounded-full"
              >
                Browse
              </Button>

              <input
                type="file"
                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileSelect}
              />

              {fileName && (
                <p className="text-green-700 font-medium mt-6">Uploaded: {fileName}</p>
              )}
            </div>

            <div className="mt-8">
              <div className="bg-gray-600 rounded-full h-8 overflow-hidden relative">
                <div
                  className="bg-blue-600 h-full transition-all duration-300 flex items-center justify-center"
                  style={{ width: `${progress}%` }}
                >
                  <span className="text-white font-semibold text-lg absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {progress < 100 ? `${progress}%` : "Upload Complete"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
