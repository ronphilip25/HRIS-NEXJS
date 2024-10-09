'use client'

import MainLayout from '@/app/Layout/MainLayout'
import { useNavbar } from '../../../context/NavbarContext';
import { useEffect } from 'react';
import React from 'react'

const page = () => {

  const { setPageTitle, setSubTitle } = useNavbar();

  useEffect(() => {
    setPageTitle("Approval Management");
    setSubTitle("Approval");
  }, [setPageTitle, setSubTitle]);


  return (
    <>
      <MainLayout
        pageTitle="Approval | Next.js"
        description="Welcome to my Next.js app. Learn about the latest trends."
        keywords="Human Resource Info System, Vercel, Nextjs, React"
      >
        <div>
          Approval
        </div>
      </MainLayout>
    </>
  )
}

export default page