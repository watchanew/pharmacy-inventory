'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [currentTime, setCurrentTime] = useState('');

  // Update clock
  useEffect(() => {
    // Set initial time
    setCurrentTime(new Date().toLocaleTimeString());
    
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <header className="bg-white backdrop-blur-sm bg-opacity-80 shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-2 rounded-xl shadow-lg">
                <span className="text-2xl">💊</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                  ระบบตรวจสอบคลังยา
                </h1>
                <p className="text-xs text-gray-500 font-medium">
                  ความโปร่งใส • ความรับผิดชอบ • ความซื่อสัตย์
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium border border-green-200">
                <span className="text-green-500 font-bold">✓</span>
                <span>รับรองการต่อต้านทุจริต</span>
              </div>
              <div className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-lg text-sm font-mono border border-indigo-100 shadow-sm">
                {currentTime}
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        {/* Main dashboard with iframe */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 border border-gray-100">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span>📊</span> การตรวจสอบห้องเก็บยา
            </h2>
            <p className="text-blue-100 text-sm mt-1">
              ตารางแสดงข้อมูลแบบเรียลไทม์สำหรับอุณหภูมิ ความชื้น และบันทึกการเข้าถึงห้องเก็บยา
            </p>
          </div>
          
          <div className="p-6">
            <iframe
              width="100%"
              height="600"
              className="border-0 rounded-lg shadow-inner bg-gray-50"
              scrolling="no"
              src="https://studentmahidolac-my.sharepoint.com/personal/sasit_srr_student_mahidol_ac_th/_layouts/15/Doc.aspx?sourcedoc={bacebc90-dc84-4aba-927a-cb23fa45a717}&action=embedview&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True"
              title="ข้อมูลการตรวจสอบห้องยา"
            />
          </div>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800">มาตรการต่อต้านการทุจริต</h3>
            </div>
            <p className="text-gray-600">
              ระบบตรวจสอบนี้ช่วยป้องกันการขโมยยาและการปลอมแปลงโดยการตรวจสอบสภาพการจัดเก็บและบันทึกการเข้าถึงอย่างโปร่งใส
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-amber-100 text-amber-600 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800">แนวทางความปลอดภัย</h3>
            </div>
            <p className="text-gray-600">
              อุณหภูมิควรอยู่ระหว่าง 15-25°C และความชื้นระหว่าง 35-60% เพื่อการจัดเก็บยาที่เหมาะสม การเบี่ยงเบนใด ๆ จะทริกเกอร์การแจ้งเตือนทันที
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-indigo-100 text-indigo-600 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800">การยืนยันตัวตนการเข้าถึง</h3>
            </div>
            <p className="text-gray-600">
              จำเป็นต้องมีการยืนยันตัวตนสำหรับการเข้าห้องเก็บยาทุกครั้ง ต้องเป็นบุคลากรที่ได้รับการอนุญาติ
            </p>
          </div>
        </div>
      </main>
      
      <footer className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white mt-12 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-3">เกี่ยวกับเรา</h3>
              <p className="text-blue-100 text-sm">
                ระบบตรวจสอบคลังยาถูกพัฒนาขึ้นเพื่อส่งเสริมความโปร่งใสและความรับผิดชอบในการดูแลสุขภาพ
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">ติดต่อเรา</h3>
              <p className="text-blue-100 text-sm">
                อีเมล: chai4ramen@macau888.th<br />
                โทรศัพท์: 09-123-4567
              </p>
            </div>
          </div>
          <div className="border-t border-blue-400 mt-6 pt-6 text-center text-blue-100 text-sm">
            <p>© {new Date().getFullYear()} ชาย4หมี่เตี๋ยวจะเอาA | ส่งเสริมความโปร่งใสและการป้องกันทุจริตในสังคม</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
