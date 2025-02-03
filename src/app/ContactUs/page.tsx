'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Label } from '@radix-ui/react-label';
import { Input } from "@/components/ui/input";
import { cn } from '@/utils/cn';
import { motion } from "framer-motion";
import { HeroHighlight } from "@/components/hero-highlight";
import { Client, Databases } from 'appwrite';

const client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('6799d9e300143c346891');

const databases = new Databases(client);

function Page() {
  const [formData, setFormData] = useState({
    name: '',
    ContactNumber: '',
    EmailAddress: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await databases.createDocument(
        '6799db2e00144cae9c8a',
        '6799db590012ead94372',
        'unique()',
        formData
      );
      console.log('Document created successfully', response);
    } catch (error) {
      console.error('Error creating document', error);
    }
  };

  return (
    <HeroHighlight>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [20, -5, 0] }}
        transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
        className="text-2xl px-4 md:text-2xl lg:text-1xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <div className='flex justify-center items-center h-screen pt-[200px] bg-white-200'>
        <div className="max-w-md mx-auto rounded md:rounded-2xl p-4 md:p-10 shadow-input bg-[#86A873] dark:bg-black">
        <h2 className="font-bold text-3xl text-white dark:text-neutral-200">
        Welcome To Farmerzone
        </h2>
        <p className="text-white text-2xl max-w-sm mt-2 dark:text-neutral-300">
        Get In Touch
        </p>

            <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter Your Full Name" type="text" value={formData.name || ''} onChange={handleChange} />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="ContactNumber">Number</Label>
                <Input id="ContactNumber" placeholder="0123456789" type="text" value={formData.ContactNumber || ''} onChange={handleChange} />
              </LabelInputContainer>
                </div>
              <LabelInputContainer className="mb-6">
                <Label htmlFor="EmailAddress">Email Address</Label>
                <Input id="EmailAddress" placeholder="example123@gmail.com" type="email" value={formData.EmailAddress || ''} onChange={handleChange} />
              </LabelInputContainer>

              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Submit &rarr;
              </button>
            </form>
          </div>
        </div>
      </motion.h1>
    </HeroHighlight>
  );
}

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default Page;
