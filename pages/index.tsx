import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
  // Define the type for the dataLayer arguments
  type DataLayerObject = {
    // Define the properties of the objects you expect to push to the dataLayer
    event?: string;
    // ... other properties
  };
  
  // Assume dataLayer is globally available
  declare global {
    interface Window { dataLayer: DataLayerObject[]; }
  }

export default function Home() {
  return (
    'Testsite'
  )
}
