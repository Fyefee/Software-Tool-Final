import React, { useEffect, useState } from "react";
import { Stack, Button, Link } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import '../assets/css/HomePage.css';

function HomePage({ navigation }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="container mx-auto xl:px-52 lg:px-10 py-4">

        <div className="flex justify-between">
          <img className="logo" src="https://app.dtac.co.th/vaccine/assets/images/logo-dtac@2x.png" alt="Logo" />
          <span className="languageButton">ไทย</span>
        </div>

        <div className="py-5">
          <img className="largeBanner" src="https://app.dtac.co.th/vaccine/assets/images/banner/WebBanner-desktop-1120x400-Th_2022-Apr-28.jpg" alt="banner" />
          <img className="smallBanner" src="https://app.dtac.co.th/vaccine/assets/images/banner/WebBanner-Mobile-768x560-Th_2022-Apr-28.jpg" alt="banner" />
        </div>

        <div className="xl:text-center py-8">
          <h1 className="text-3xl xl:text-4xl font-semibold">ดีแทค เปิดลงทะเบียน รับการฉีดวัคซีนโควิด-19</h1>
        </div>

        <div className="py-8 xl:px-20">

          <h1 className="text-lg lg:text-2xl font-medium">เลือกศูนย์ฉีดวัคซีนโควิด -19</h1>

          <button 
            className={`selectBox my-4 flex justify-between items-end cursor-pointer w-full text-left ${isOpen ? "selected" : null}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Stack spacing={1}>
              <p className="text-md">ศูนย์วัคซีนกลางบางซื่อ</p>
              <Stack direction="row" spacing={3}>
                <LocationOnOutlinedIcon />
                <p className="text-sm">สถานีกลางบางซื่อ โดยเข้าทาง ก.กำแพงเพชร</p>
              </Stack>
            </Stack>
            <p className={`selectButton ${isOpen ? "selected" : null}`}>เลือก</p>
          </button>

          {isOpen && (
            <div className="px-3">
              <p className="text-lg">ศูนย์ฉีดวัคซีนกลางบางซื่อ</p>
              <div className="flex justify-between">

                <Stack className="px-2" >
                  <Stack direction="row" spacing={3} className="vaccineText py-3 flex items-center">
                    <VaccinesIcon />
                    <p className="text-2xl font-medium">กระตุ้นเข็มที่ 4</p>
                  </Stack>
                  <p className="text-sm" >สำหรับคนไทยและต่างชาติ อายุ 18 ปีขึ้นไป</p>
                  <p className="text-sm" >ที่ต้องการฉีดวัคซีนกระตุ้นเข็มที่ 4 ด้วยวัคซีนไฟเซอร์</p>
                  <p className="text-sm font-semibold" >โดยได้รับเข็มที่ 3 มาแล้วอย่างน้อย 120 วัน</p>
                  <p className="text-sm font-semibold" >เริ่มฉีด 1 - 31 พ.ค. 65</p>
                  <p className="text-sm" >ฉีดที่ ศูนย์ฉีดวัคซีนกลางบางซื่อ (สถานีกลางบางซื่อ ประตู 2 โดยเข้าทาง ถ.กำแพงเพชร)</p>
                </Stack>

                <Link href="/vaccine/registration">
                  <Button 
                    variant="contained" 
                    className="registerButton"
                    onClick={() => navigation.push('/vaccine/registration')}
                  >ลงทะเบียนฉีดวัคซีนเข็มที่ 4
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default HomePage;
