import React, { useEffect, useState } from "react";
import { Stack, Button, Select, MenuItem, TextField } from '@mui/material';
import { styled } from '@mui/system'
import axios from 'axios'
import { useForm, Controller } from 'react-hook-form'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import '../assets/css/FormPage.css';
import {
  validateNameLead,
  validateFirstName,
  validateLastName,
  validatePersonalCard,
  validateCardNumber,
  validateBirthDate,
  validateLocation,
  validateProvince,
  validateDistrict,
  validateSubDistrict,
  validatePhoneNumber
} from '../lib/formValidation'

function FormPage() {
  const {
    register, formState: { errors }, handleSubmit, reset, control,
  } = useForm()
  const onSubmit = async (data) => {
    console.log(data)

    if (!validateNameLead(data.nameLead)) {
      return false;
    }

    if (!validateFirstName(data.firstName)) {
      return false;
    }

    if (!validateLastName(data.lastName)) {
      return false;
    }

    if (!validatePersonalCard(data.personalCard)) {
      return false;
    }

    if (!validateCardNumber(data.cardNumber)) {
      return false;
    }

    if (!validateBirthDate(data.birthDate)) {
      return false;
    }

    if (!validateLocation(data.location)) {
      return false;
    }

    if (!validateProvince(data.province)) {
      return false;
    }

    if (!validateDistrict(data.district)) {
      return false;
    }

    if (!validateSubDistrict(data.subDistrict)) {
      return false;
    }

    if (!validatePhoneNumber(data.phoneNumber)) {
      return false;
    }

    await axios.post(`http://localhost:8000/user`, data);
  }

  const [isOpen, setIsOpen] = useState(false);

  const [nameLead, setNameLead] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [personalCard, setPersonalCard] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const [location, setLocation] = useState('');
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [subDistrict, setSubDistrict] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <div className="w-full">
      <div className="container mx-auto xl:px-52 lg:px-10 py-4">

        <div className="flex justify-between">
          <img className="logo" src="https://app.dtac.co.th/vaccine/assets/images/logo-dtac@2x.png" alt="Logo" />
          <span className="languageButton">ไทย</span>
        </div>

        <div className="flex justify-items-center items-center w-full pt-10">
          <Stack direction="row" spacing={2} className="mx-auto">
            <img src="https://app.dtac.co.th/vaccine/assets/images/logo-nbtc@2x.png" className="logoHeader" alt="logo1" />
            <img src="https://app.dtac.co.th/vaccine/assets/images/logo-moph@2x.png" className="logoHeader" alt="logo2" />
            <img src="https://app.dtac.co.th/vaccine/assets/images/logo-mot@2x.png" className="logoHeader" alt="logo3" />
          </Stack>
        </div>

        <div className="xl:text-center py-4">
          <p className="text-3xl xl:text-4xl font-semibold textHeader">ลงทะเบียนรับสิทธิ์วัคซีน</p>
        </div>

        <div className="px-3 pt-5">
          <p className="text-2xl font-semibold">ศูนย์ฉีดวัคซีนกลางบางซื่อ</p>
          <Stack direction="row" spacing={3} className="vaccineText py-3 flex items-center px-3">
            <VaccinesIcon />
            <p className="text-2xl font-medium">กระตุ้นเข็มที่ 4</p>
          </Stack>
        </div>

        <form>
          <section className="px-3 py-6">
            <p className="text-3xl font-semibold">ข้อมูลทั่วไป</p>

            <div className="grid grid-cols-12">

              <div className="col-span-4 px-2">
                <Stack className="w-full py-3" spacing={1}>
                  <p>คำนำหน้า</p>
                  <Controller
                    name="nameLead"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    defaultValue={nameLead}
                    render={({ field: { onChange, value } }) => (
                      <Select
                        className="w-full"
                        placeholder="โปรดระบุ"
                        size="small"
                        onChange={onChange}
                        value={value}
                      >
                        <MenuItem value="นาย">นาย</MenuItem>
                        <MenuItem value="นาง">นาง</MenuItem>
                        <MenuItem value="นางสาว">นางสาว</MenuItem>
                      </Select>
                    )}
                  />
                  <p className="errorText">
                    {errors.nameLead?.type === 'required' && 'โปรดเลือก คำนำหน้า'}
                  </p>
                </Stack>
              </div>

              <div className="col-span-4 px-2">
                <Stack className="w-full py-3" spacing={1}>
                  <p>ชื่อจริง</p>
                  <Controller
                    name="firstName"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    defaultValue={firstName}
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        className="w-full"
                        size="small"
                        placeholder="ชื่อภาษาไทย"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                  <p className="errorText">
                    {errors.firstName?.type === 'required' && 'กรุณากรอก ชื่อ'}
                  </p>
                </Stack>
              </div>

              <div className="col-span-4 px-2">
                <Stack className="w-full py-3" spacing={1}>
                  <p>นามสกุล</p>
                  <Controller
                    name="lastName"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    defaultValue={lastName}
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        className="w-full"
                        size="small"
                        placeholder="นามสกุลภาษาไทย"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                  <p className="errorText">
                    {errors.lastName?.type === 'required' && 'กรุณากรอก นามสกุล'}
                  </p>
                </Stack>
              </div>

            </div>

            <div className="grid grid-cols-12 pt-3">

              <div className="col-span-4 px-2">
                <Stack className="w-full py-3" spacing={1}>
                  <p>บัตรประจำตัว</p>
                  <Controller
                    name="personalCard"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    defaultValue={personalCard}
                    render={({ field: { onChange, value } }) => (
                      <Select
                        className="w-full"
                        placeholder="โปรดระบุ"
                        size="small"
                        onChange={onChange}
                        value={value}
                      >
                        <MenuItem value="นาย">บัตรประจำตัวประชาชน</MenuItem>
                        <MenuItem value="นาง">บัตรชมพู</MenuItem>
                        <MenuItem value="นางสาว">หนังสือเดินทาง</MenuItem>
                      </Select>
                    )}
                  />
                  <p className="errorText">
                    {errors.personalCard?.type === 'required' && 'โปรดเลือก ประเภทบัตร'}
                  </p>
                </Stack>
              </div>

              <div className="col-span-4 px-2">
                <Stack className="w-full py-3" spacing={1}>
                  <p>เลขบัตรประจำตัว</p>
                  <Controller
                    name="cardNumber"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    defaultValue={cardNumber}
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        className="w-full"
                        size="small"
                        placeholder="หมายเลขบัตรของคุณ"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                  <p className="errorText">
                    {errors.cardNumber?.type === 'required' && 'เลขบัตรไม่ถูกต้อง'}
                  </p>
                </Stack>
              </div>

              <div className="col-span-4 px-2">
                <Stack className="w-full py-3" spacing={1}>
                  <p>วัน/เดือน/ปีเกิด</p>
                  <Controller
                    name="birthDate"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    defaultValue={birthDate}
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        className="w-full"
                        size="small"
                        type="date"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                  <p className="errorText">
                    {errors.birthDate?.type === 'required' && 'วัน/เดือน/ปีเกิด ไม่ถูกต้อง'}
                  </p>
                </Stack>
              </div>

            </div>
          </section>

          <section className="px-3 py-6">
            <p className="text-3xl font-semibold">ที่อยู่</p>

            <div className="grid grid-cols-12">

              <div className="col-span-6 px-2">
                <Stack className="w-full py-3" spacing={1}>
                  <p>รายละเอียดที่อยู่</p>
                  <Controller
                    name="location"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    defaultValue={location}
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        className="w-full"
                        size="small"
                        placeholder="บ้านเลขที่ ที่อยู่"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                  <p className="errorText">
                    {errors.location?.type === 'required' && 'กรุณากรอก รายละเอียดที่อยู่'}
                  </p>
                </Stack>
              </div>

              <div className="col-span-6 px-2">
                <Stack className="w-full py-3" spacing={1}>
                  <p>จังหวัด</p>
                  <Controller
                    name="province"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    defaultValue={province}
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        className="w-full"
                        size="small"
                        placeholder="จังหวัด"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                  <p className="errorText">
                    {errors.province?.type === 'required' && 'กรุณากรอก จังหวัด'}
                  </p>
                </Stack>
              </div>

            </div>

            <div className="grid grid-cols-12 pt-3">

              <div className="col-span-6 px-2">
                <Stack className="w-full py-3" spacing={1}>
                  <p>เขต / อำเภอ</p>
                  <Controller
                    name="district"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    defaultValue={district}
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        className="w-full"
                        size="small"
                        placeholder="อำเภอ"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                  <p className="errorText">
                    {errors.district?.type === 'required' && 'กรุณากรอก อำเภอ'}
                  </p>
                </Stack>
              </div>

              <div className="col-span-6 px-2">
                <Stack className="w-full py-3" spacing={1}>
                  <p>แขวง / ตำบล</p>
                  <Controller
                    name="subDistrict"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    defaultValue={subDistrict}
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        className="w-full"
                        size="small"
                        placeholder="แขวง / ตำบล"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                  <p className="errorText">
                    {errors.subDistrict?.type === 'required' && 'กรุณากรอก ตำบล'}
                  </p>
                </Stack>
              </div>

            </div>

            <div className="grid grid-cols-12 pt-3">

              <div className="col-span-6 px-2">
                <Stack className="w-full py-3" spacing={1}>
                  <p>หมายเลขโทรศัพท์ของคุณ</p>
                  <Controller
                    name="phoneNumber"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    defaultValue={phoneNumber}
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        className="w-full"
                        size="small"
                        placeholder="กรอกหมายเลขดีแทค"
                        type="number"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                  <p className="errorText">
                    {errors.phoneNumber?.type === 'required' && 'กรุณากรอก อำเภอ'}
                  </p>
                </Stack>
              </div>

            </div>
          </section>

          <section className="w-full flex justify-items-center">
            <Button
              variant="contained"
              className="registerButton w-32"
              onClick={handleSubmit(onSubmit)}
            >
              ถัดไป
          </Button>
          </section>
        </form>

      </div>
    </div>
  );
}

export default FormPage;
