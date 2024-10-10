'use client';

import MainLayout from '@/app/Layout/MainLayout';
import { useNavbar } from '../../../context/NavbarContext';
import { useEffect } from 'react';
import React from 'react';
import Link from 'next/link';

const Card = ({ title, count, link }) => (
  <Link href={link} passHref>
    <div className="h-[118px] w-full rounded-lg bg-white p-5 shadow-lg cursor-pointer hover:text-blue-600">
      <div className="flex font-sans text-lg font-normal">{title}</div>
      <div className="flex items-center justify-between">
        <h3 className="font-sans text-4xl text-gray-700 font-bold">{count}</h3>
        <div className="mb-4">
          <svg
            id="clickable-icon"
            className="h-6 w-6 fill-current"
            viewBox="0 0 12 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.938696 0.454805C0.657489 0.736096 0.499516 1.11756 0.499516 1.5153C0.499516 1.91305 0.657489 2.29451 0.938696 2.5758L8.3637 10.0008L0.938696 17.4258C0.665459 17.7087 0.514267 18.0876 0.517685 18.4809C0.521102 18.8742 0.678856 19.2504 0.956967 19.5285C1.23508 19.8066 1.6113 19.9644 2.00459 19.9678C2.39789 19.9712 2.77679 19.82 3.0597 19.5468L11.5452 11.0613C11.8264 10.78 11.9844 10.3986 11.9844 10.0008C11.9844 9.60306 11.8264 9.2216 11.5452 8.9403L3.0597 0.454805C2.7784 0.173598 2.39694 0.015625 1.9992 0.015625C1.60145 0.015625 1.21999 0.173598 0.938696 0.454805Z" />
          </svg>
        </div>
      </div>
    </div>
  </Link>
);

const Dashboard = () => {
  const cards = [
    { title: 'Active', count: 12, link: '/active' },
    { title: 'Invited', count: 2, link: '/invited' },
    { title: 'Resigned', count: 0, link: '/resigned' },
    { title: 'Deleted', count: 0, link: '/deleted' },
  ];

  return (
    <div className="container mx-auto mt-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} count={card.count} link={card.link} />
        ))}
      </div>
    </div>
  );
};

const Page = () => {
  const { setPageTitle, setSubTitle } = useNavbar();

  useEffect(() => {
    setPageTitle("Employees");
    setSubTitle("Employees");
  }, [setPageTitle, setSubTitle]);

  return (
    <MainLayout
      pageTitle="Employees | Next.js"
      description="Welcome to my Next.js app. Learn about the latest trends."
      keywords="Human Resource Info System, Vercel, Nextjs, React"
    >
      <div>
        <Dashboard />
      </div>
    </MainLayout>
  );
};

export default Page;
