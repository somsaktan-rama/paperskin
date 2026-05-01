// Service Worker พื้นฐาน (ไม่เก็บ Cache เพื่อให้ดึงข้อมูลอัปเดตจาก GAS ตลอดเวลา)
self.addEventListener('install', (e) => {
  console.log('[Service Worker] ติดตั้งสำเร็จ');
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // ปล่อยผ่าน Request ทั้งหมดไปที่ Server 
  e.respondWith(fetch(e.request));
});
