export const types = [
  {
    id: 1,
    name: 'Airport',
    description: 'Airport',
    types: [
      {
        id: 1,
        name: 'Airport A  ',
        description: 'Airport A'
      },
      {
        id: 2,
        name: 'Airport B',
        description: 'Airport B'
      },
      {
        id: 3,
        name: 'Airport C',
        description: 'Airport C'
      }
    ]
  },
  {
    id: 2,
    name: 'Hotel',
    description: 'Hotel',
    types: [
      {
        id: 1,
        name: 'Hotel A',
        description: 'Hotel A'
      },
      {
        id: 2,
        name: 'Hotel B',
        description: 'Hotel B'
      }
    ]
  },
  {
    id: 3,
    name: 'City',
    description: 'City',
    types: [
      {
        id: 1,
        name: 'City A',
        description: 'City A'
      },
      {
        id: 2,
        name: 'City B',
        description: 'City B'
      }
    ]
  },

  {
    id: 4,
    name: 'Country',
    description: 'Country',
    types: [
      {
        id: 1,
        name: 'Country A',
        description: 'Country A'
      },
      {
        id: 2,
        name: 'Country B',
        description: 'Country B'
      }
    ]
  },
  {
    id: 5,
    name: 'Restaurant',
    description: 'Restaurant',
    types: [
      {
        id: 1,
        name: 'Restaurant A',
        description: 'Restaurant A'
      },
      {
        id: 2,
        name: 'Restaurant B',
        description: 'Restaurant B'
      }
    ]
  },
  {
    id: 6,
    name: 'Location',
    description: 'Location',
    types: [
      {
        id: 1,
        name: 'Location A',
        description: 'Location A'
      },
      {
        id: 2,
        name: 'Location B',
        description: 'Location B'
      }
    ]
  }
]
export const transportation_types = [
  {
    id: 1,
    name: 'Air',
    description: 'Air',
    vendors: [
      {
        id: 1,
        name: 'Fly Emirates',
        description: 'Fly Emirates'
      },
      {
        id: 2,
        name: 'Fly Qatar',
        description: 'Fly Qatar'
      }
    ]
  },
  {
    id: 2,
    name: 'Train',
    description: 'Train',
    vendors: [
      {
        id: 1,
        name: 'Train Emirates',
        description: 'Train Emirates'
      },
      {
        id: 2,
        name: 'Train Qatar',
        description: 'Train Qatar'
      }
    ]
  },
  {
    id: 3,
    name: 'Bus',
    description: 'Bus',
    vendors: [
      {
        id: 1,
        name: 'Bus Emirates',
        description: 'Bus Emirates'
      },
      {
        id: 2,
        name: 'Bus Qatar',
        description: 'Bus Qatar'
      }
    ]
  },
  {
    id: 4,
    name: 'Boat',
    description: 'Boat',
    vendors: [
      {
        id: 1,
        name: 'Boat Emirates',
        description: 'Boat Emirates'
      },
      {
        id: 2,
        name: 'Boat Qatar',
        description: 'Boat Qatar'
      }
    ]
  },
  {
    id: 5,
    name: 'Car',
    description: 'Car',
    vendors: [
      {
        id: 1,
        name: 'Car Emirates',
        description: 'Car Emirates'
      },
      {
        id: 2,
        name: 'Car Qatar',
        description: 'Car Qatar'
      }
    ]
  },
  {
    id: 6,
    name: 'Walking',
    description: 'Walking',
    vendors: []
  },
  {
    id: 7,
    name: 'Other',
    description: 'Other',
    vendors: []
  }
]
export const vendors = [
  {
    id: 1,
    name: 'ABC Airport',
    description: 'Vendor 1'
  },
  {
    id: 2,
    name: 'BCD Hotel',
    description: 'Vendor 2'
  },
  {
    id: 3,
    name: 'CDE Transport',
    description: 'Vendor 3'
  },
  {
    id: 4,
    name: 'DEF Food',
    description: 'Vendor 4'
  },
  {
    id: 5,
    name: 'GHI Other'
  }
]
export const countries = [
  {
    id: '01',
    name: 'USA',
    description: 'USA',
    cities: [
      { id: 'US01', name: 'Texas' },
      { id: 'US02', name: 'New York' },
      { id: 'US03', name: 'Los Angeles' },
      { id: 'US04', name: 'Chicago' },
      { id: 'US05', name: 'Houston' },
      { id: 'US06', name: 'Phoenix' },
      { id: 'US07', name: 'Philadelphia' },
      { id: 'US08', name: 'San Antonio' },
      { id: 'US09', name: 'San Diego' },
      { id: 'US10', name: 'Dallas' }
    ]
  },
  {
    id: '02',
    name: 'Bangladesh',
    description: 'Bangladesh',
    cities: [
      { id: 'BD01', name: 'Dhaka' },
      { id: 'BD02', name: 'Chittagong' },
      { id: 'BD03', name: 'Khulna' },
      { id: 'BD04', name: 'Rajshahi' },
      { id: 'BD05', name: 'Sylhet' },
      { id: 'BD06', name: 'Barisal' },
      { id: 'BD07', name: 'Rangpur' },
      { id: 'BD08', name: 'Mymensingh' },
      { id: 'BD09', name: "Cox's Bazar" },
      { id: 'BD10', name: 'Comilla' }
    ]
  },
  {
    id: '03',
    name: 'UK',
    description: 'UK',
    cities: [
      { id: 'UK01', name: 'London' },
      { id: 'UK02', name: 'Birmingham' },
      { id: 'UK03', name: 'Manchester' },
      { id: 'UK04', name: 'Glasgow' },
      { id: 'UK05', name: 'Liverpool' },
      { id: 'UK06', name: 'Leeds' },
      { id: 'UK07', name: 'Sheffield' },
      { id: 'UK08', name: 'Edinburgh' },
      { id: 'UK09', name: 'Bristol' },
      { id: 'UK10', name: 'Leicester' }
    ]
  },
  {
    id: '04',
    name: 'Canada',
    description: 'Canada',
    cities: [
      { id: 'CA01', name: 'Toronto' },
      { id: 'CA02', name: 'Montreal' },
      { id: 'CA03', name: 'Vancouver' },
      { id: 'CA04', name: 'Calgary' },
      { id: 'CA05', name: 'Ottawa' },
      { id: 'CA06', name: 'Edmonton' },
      { id: 'CA07', name: 'Quebec City' },
      { id: 'CA08', name: 'Winnipeg' },
      { id: 'CA09', name: 'Hamilton' },
      { id: 'CA10', name: 'Halifax' }
    ]
  },
  {
    id: '05',
    name: 'Australia',
    description: 'Australia',
    cities: [
      { id: 'AU01', name: 'Sydney' },
      { id: 'AU02', name: 'Melbourne' },
      { id: 'AU03', name: 'Brisbane' },
      { id: 'AU04', name: 'Perth' },
      { id: 'AU05', name: 'Adelaide' },
      { id: 'AU06', name: 'Gold Coast' },
      { id: 'AU07', name: 'Newcastle' },
      { id: 'AU08', name: 'Canberra' },
      { id: 'AU09', name: 'Hobart' },
      { id: 'AU10', name: 'Darwin' }
    ]
  },
  {
    id: '06',
    name: 'Germany',
    description: 'Germany',
    cities: [
      { id: 'DE01', name: 'Berlin' },
      { id: 'DE02', name: 'Hamburg' },
      { id: 'DE03', name: 'Munich' },
      { id: 'DE04', name: 'Cologne' },
      { id: 'DE05', name: 'Frankfurt' },
      { id: 'DE06', name: 'Stuttgart' },
      { id: 'DE07', name: 'Düsseldorf' },
      { id: 'DE08', name: 'Leipzig' },
      { id: 'DE09', name: 'Dortmund' },
      { id: 'DE10', name: 'Essen' }
    ]
  },
  {
    id: '07',
    name: 'France',
    description: 'France',
    cities: [
      { id: 'FR01', name: 'Paris' },
      { id: 'FR02', name: 'Marseille' },
      { id: 'FR03', name: 'Lyon' },
      { id: 'FR04', name: 'Toulouse' },
      { id: 'FR05', name: 'Nice' },
      { id: 'FR06', name: 'Nantes' },
      { id: 'FR07', name: 'Strasbourg' },
      { id: 'FR08', name: 'Montpellier' },
      { id: 'FR09', name: 'Bordeaux' },
      { id: 'FR10', name: 'Lille' }
    ]
  },
  {
    id: '08',
    name: 'Italy',
    description: 'Italy',
    cities: [
      { id: 'IT01', name: 'Rome' },
      { id: 'IT02', name: 'Milan' },
      { id: 'IT03', name: 'Naples' },
      { id: 'IT04', name: 'Turin' },
      { id: 'IT05', name: 'Palermo' },
      { id: 'IT06', name: 'Genoa' },
      { id: 'IT07', name: 'Bologna' },
      { id: 'IT08', name: 'Florence' },
      { id: 'IT09', name: 'Venice' },
      { id: 'IT10', name: 'Verona' }
    ]
  },
  {
    id: '09',
    name: 'Saudi Arabia',
    description: 'Saudi Arabia',
    cities: [
      { id: 'SA01', name: 'Mecca' },
      { id: 'SA02', name: 'Medina' },
      { id: 'SA03', name: 'Riyadh' },
      { id: 'SA04', name: 'Jeddah' },
      { id: 'SA05', name: 'Dammam' },
      { id: 'SA06', name: 'Taif' },
      { id: 'SA07', name: 'Tabuk' },
      { id: 'SA08', name: 'Al-Khobar' },
      { id: 'SA09', name: 'Abha' },
      { id: 'SA10', name: 'Buraidah' }
    ]
  },
  {
    id: '10',
    name: 'Turkey',
    description: 'Turkey',
    cities: [
      { id: 'TR01', name: 'Istanbul' },
      { id: 'TR02', name: 'Ankara' },
      { id: 'TR03', name: 'Izmir' },
      { id: 'TR04', name: 'Bursa' },
      { id: 'TR05', name: 'Antalya' },
      { id: 'TR06', name: 'Adana' },
      { id: 'TR07', name: 'Konya' },
      { id: 'TR08', name: 'Gaziantep' },
      { id: 'TR09', name: 'Mersin' },
      { id: 'TR10', name: 'Diyarbakir' }
    ]
  },
  {
    id: '11',
    name: 'India',
    description: 'India',
    cities: [
      { id: 'IN01', name: 'Mumbai' },
      { id: 'IN02', name: 'Delhi' },
      { id: 'IN03', name: 'Bangalore' },
      { id: 'IN04', name: 'Hyderabad' },
      { id: 'IN05', name: 'Chennai' },
      { id: 'IN06', name: 'Kolkata' },
      { id: 'IN07', name: 'Ahmedabad' },
      { id: 'IN08', name: 'Pune' },
      { id: 'IN09', name: 'Jaipur' },
      { id: 'IN10', name: 'Lucknow' }
    ]
  },
  {
    id: '12',
    name: 'Pakistan',
    description: 'Pakistan',
    cities: [
      { id: 'PK01', name: 'Karachi' },
      { id: 'PK02', name: 'Lahore' },
      { id: 'PK03', name: 'Islamabad' },
      { id: 'PK04', name: 'Rawalpindi' },
      { id: 'PK05', name: 'Faisalabad' },
      { id: 'PK06', name: 'Multan' },
      { id: 'PK07', name: 'Peshawar' },
      { id: 'PK08', name: 'Quetta' },
      { id: 'PK09', name: 'Sialkot' },
      { id: 'PK10', name: 'Gujranwala' }
    ]
  },
  {
    id: '13',
    name: 'Indonesia',
    description: 'Indonesia',
    cities: [
      { id: 'ID01', name: 'Jakarta' },
      { id: 'ID02', name: 'Surabaya' },
      { id: 'ID03', name: 'Bandung' },
      { id: 'ID04', name: 'Medan' },
      { id: 'ID05', name: 'Semarang' },
      { id: 'ID06', name: 'Makassar' },
      { id: 'ID07', name: 'Palembang' },
      { id: 'ID08', name: 'Tangerang' },
      { id: 'ID09', name: 'Depok' },
      { id: 'ID10', name: 'Bekasi' }
    ]
  },
  {
    id: '14',
    name: 'China',
    description: 'China',
    cities: [
      { id: 'CN01', name: 'Shanghai' },
      { id: 'CN02', name: 'Beijing' },
      { id: 'CN03', name: 'Guangzhou' },
      { id: 'CN04', name: 'Shenzhen' },
      { id: 'CN05', name: 'Chengdu' },
      { id: 'CN06', name: 'Tianjin' },
      { id: 'CN07', name: 'Wuhan' },
      { id: 'CN08', name: 'Dongguan' },
      { id: 'CN09', name: 'Chongqing' },
      { id: 'CN10', name: 'Nanjing' }
    ]
  },
  {
    id: '15',
    name: 'Mexico',
    description: 'Mexico',
    cities: [
      { id: 'MX01', name: 'Mexico City' },
      { id: 'MX02', name: 'Guadalajara' },
      { id: 'MX03', name: 'Monterrey' },
      { id: 'MX04', name: 'Puebla' },
      { id: 'MX05', name: 'Tijuana' },
      { id: 'MX06', name: 'León' },
      { id: 'MX07', name: 'Juárez' },
      { id: 'MX08', name: 'Zapopan' },
      { id: 'MX09', name: 'Mérida' },
      { id: 'MX10', name: 'San Luis Potosí' }
    ]
  },
  {
    id: '16',
    name: 'Portugal',
    description: 'Portugal',
    cities: [
      { id: 'PT01', name: 'Lisbon' },
      { id: 'PT02', name: 'Porto' },
      { id: 'PT03', name: 'Vila Nova de Gaia' },
      { id: 'PT04', name: 'Amadora' },
      { id: 'PT05', name: 'Braga' },
      { id: 'PT06', name: 'Setúbal' },
      { id: 'PT07', name: 'Coimbra' },
      { id: 'PT08', name: 'Funchal' },
      { id: 'PT09', name: 'Almada' },
      { id: 'PT10', name: 'Queluz' }
    ]
  },
  {
    id: '17',
    name: 'Malaysia',
    description: 'Malaysia',
    cities: [
      { id: 'MY01', name: 'Kuala Lumpur' },
      { id: 'MY02', name: 'George Town' },
      { id: 'MY03', name: 'Ipoh' },
      { id: 'MY04', name: 'Shah Alam' },
      { id: 'MY05', name: 'Petaling Jaya' },
      { id: 'MY06', name: 'Johor Bahru' },
      { id: 'MY07', name: 'Melaka' },
      { id: 'MY08', name: 'Kota Kinabalu' },
      { id: 'MY09', name: 'Kuching' },
      { id: 'MY10', name: 'Kuantan' }
    ]
  },
  {
    id: '18',
    name: 'Thailand',
    description: 'Thailand',
    cities: [
      { id: 'TH01', name: 'Bangkok' },
      { id: 'TH02', name: 'Nonthaburi' },
      { id: 'TH03', name: 'Nakhon Ratchasima' },
      { id: 'TH04', name: 'Chiang Mai' },
      { id: 'TH05', name: 'Hat Yai' },
      { id: 'TH06', name: 'Udon Thani' },
      { id: 'TH07', name: 'Pak Kret' },
      { id: 'TH08', name: 'Khon Kaen' },
      { id: 'TH09', name: 'Pattaya' },
      { id: 'TH10', name: 'Songkhla' }
    ]
  },
  {
    id: '19',
    name: 'Maldives',
    description: 'Maldives',
    cities: [
      { id: 'MV01', name: 'Malé' },
      { id: 'MV02', name: 'Addu City' },
      { id: 'MV03', name: 'Fuvahmulah' },
      { id: 'MV04', name: 'Hithadhoo' },
      { id: 'MV05', name: 'Kulhudhuffushi' },
      { id: 'MV06', name: 'Thinadhoo' },
      { id: 'MV07', name: 'Naifaru' },
      { id: 'MV08', name: 'Dhidhdhoo' },
      { id: 'MV09', name: 'Eydhafushi' },
      { id: 'MV10', name: 'Kudahuvadhoo' }
    ]
  },
  {
    id: '20',
    name: 'Uzbekistan',
    description: 'Uzbekistan',
    cities: [
      { id: 'UZ01', name: 'Tashkent' },
      { id: 'UZ02', name: 'Namangan' },
      { id: 'UZ03', name: 'Samarkand' },
      { id: 'UZ04', name: 'Andijan' },
      { id: 'UZ05', name: 'Nukus' },
      { id: 'UZ06', name: 'Bukhara' },
      { id: 'UZ07', name: 'Qarshi' },
      { id: 'UZ08', name: 'Kokand' },
      { id: 'UZ09', name: 'Margilan' },
      { id: 'UZ10', name: 'Fergana' }
    ]
  },
  {
    id: '21',
    name: 'Myanmar',
    description: 'Myanmar',
    cities: [
      { id: 'MM01', name: 'Yangon' },
      { id: 'MM02', name: 'Mandalay' },
      { id: 'MM03', name: 'Naypyidaw' },
      { id: 'MM04', name: 'Bago' },
      { id: 'MM05', name: 'Mawlamyine' },
      { id: 'MM06', name: 'Pathein' },
      { id: 'MM07', name: 'Monywa' },
      { id: 'MM08', name: 'Meiktila' },
      { id: 'MM09', name: 'Sittwe' },
      { id: 'MM10', name: 'Taunggyi' }
    ]
  },
  {
    id: '22',
    name: 'South Africa',
    description: 'South Africa',
    cities: [
      { id: 'ZA01', name: 'Johannesburg' },
      { id: 'ZA02', name: 'Cape Town' },
      { id: 'ZA03', name: 'Durban' },
      { id: 'ZA04', name: 'Pretoria' },
      { id: 'ZA05', name: 'Port Elizabeth' },
      { id: 'ZA06', name: 'Bloemfontein' },
      { id: 'ZA07', name: 'Nelspruit' },
      { id: 'ZA08', name: 'Kimberley' },
      { id: 'ZA09', name: 'Polokwane' },
      { id: 'ZA10', name: 'Pietermaritzburg' }
    ]
  },
  {
    id: '23',
    name: 'Afghanistan',
    description: 'Afghanistan',
    cities: []
  },
  {
    id: '24',
    name: 'South America (Central)',
    description: 'South America (Central)',
    cities: []
  }
]
  export const statuses = [
    { id: 1, name: 'Not In Plan' },
    { id: 2, name: 'In Plan' },
    { id: 3, name: 'In Preparation' },
    { id: 4, name: 'Fully Booked' },
    { id: 5, name: 'In Approval Process' },
    { id: 6, name: 'Approved' },
    { id: 7, name: 'Published' },
    { id: 8, name: 'Discontinued' }
  ]
export const itinerary = [
  {
    day: 'Day 1',
    date: '1st November 2024',
    events: [
      { time: '10:00 AM', activity: 'Departure from Airport 1 to Airport 2 (Flight: UA123)' },
      { time: '02:00 PM', activity: 'Arrival at Airport 2 and transfer to Hotel 1' },
      { time: '03:30 PM', activity: 'Check-in at Hotel 1, Rest and Relax' },
      { time: '06:00 PM', activity: 'Welcome Dinner at Hotel Restaurant' },
      { time: '08:00 PM', activity: 'Briefing and Orientation about Umrah Package' }
    ]
  },
  {
    day: 'Day 2',
    date: '2nd November 2024',
    events: [
      { time: '08:00 AM', activity: 'Breakfast at Hotel 1' },
      { time: '09:00 AM', activity: 'Visit to Masjid Al-Haram for Tawaf and Umrah Rituals' },
      { time: '12:00 PM', activity: 'Dhuhr Prayer at Masjid Al-Haram' },
      { time: '01:30 PM', activity: 'Lunch at Local Restaurant' },
      { time: '03:00 PM', activity: 'Free time for rest and prayer' },
      { time: '07:00 PM', activity: 'Dinner at Local Restaurant' },
      { time: '09:00 PM', activity: 'Return to Hotel 1 and overnight stay' }
    ]
  },
  {
    day: 'Day 3',
    date: '3rd November 2024',
    events: [
      { time: '06:00 AM', activity: 'Fajr Prayer at Masjid Al-Haram' },
      { time: '07:30 AM', activity: 'Breakfast at Hotel 1' },
      { time: '09:00 AM', activity: 'Tour of Historical Sites in Makkah' },
      { time: '12:00 PM', activity: 'Dhuhr Prayer at Masjid Al-Haram' },
      { time: '01:30 PM', activity: 'Lunch at Local Restaurant' },
      { time: '03:30 PM', activity: 'Free Time for Rest or Shopping' },
      { time: '07:00 PM', activity: 'Dinner at Hotel 1' },
      { time: '09:00 PM', activity: 'Return to Hotel and Rest' }
    ]
  },
  {
    day: 'Day 4',
    date: '4th November 2024',
    events: [
      { time: '06:00 AM', activity: 'Fajr Prayer at Masjid Al-Haram' },
      { time: '07:30 AM', activity: 'Breakfast at Hotel 1' },
      { time: '09:00 AM', activity: 'Visit to Jabal Al-Nour (Cave of Hira)' },
      { time: '12:00 PM', activity: 'Dhuhr Prayer at Masjid Al-Haram' },
      { time: '01:30 PM', activity: 'Lunch at Local Restaurant' },
      { time: '03:00 PM', activity: 'Shopping at Makkah Mall' },
      { time: '07:00 PM', activity: 'Dinner at Al-Baik' },
      { time: '09:00 PM', activity: 'Return to Hotel 1 for overnight stay' }
    ]
  },
  {
    day: 'Day 5',
    date: '5th November 2024',
    events: [
      { time: '06:00 AM', activity: 'Fajr Prayer at Masjid Al-Haram' },
      { time: '07:30 AM', activity: 'Breakfast at Hotel 1' },
      { time: '09:00 AM', activity: 'Transfer to Medinah (Bus Ride)' },
      { time: '02:00 PM', activity: 'Check-in at Hotel 2 in Medinah' },
      { time: '04:00 PM', activity: 'Visit to Masjid Al-Nabawi' },
      { time: '06:00 PM', activity: 'Maghrib Prayer at Masjid Al-Nabawi' },
      { time: '07:00 PM', activity: 'Dinner at Local Restaurant' },
      { time: '09:00 PM', activity: 'Return to Hotel 2 for overnight stay' }
    ]
  },
  {
    day: 'Day 6',
    date: '6th November 2024',
    events: [
      { time: '06:00 AM', activity: 'Fajr Prayer at Masjid Al-Nabawi' },
      { time: '08:00 AM', activity: 'Breakfast at Hotel 2' },
      { time: '09:00 AM', activity: 'Visit to Quba Mosque and Qiblatain Mosque' },
      { time: '12:00 PM', activity: 'Dhuhr Prayer at Masjid Al-Nabawi' },
      { time: '01:30 PM', activity: 'Lunch at Local Restaurant' },
      { time: '03:00 PM', activity: 'Tour of Uhud Battlefield' },
      { time: '07:00 PM', activity: 'Dinner at Local Restaurant' },
      { time: '09:00 PM', activity: 'Return to Hotel 2 for overnight stay' }
    ]
  },
  {
    day: 'Day 7',
    date: '7th November 2024',
    events: [
      { time: '06:00 AM', activity: 'Fajr Prayer at Masjid Al-Nabawi' },
      { time: '08:00 AM', activity: 'Breakfast at Hotel 2' },
      { time: '09:00 AM', activity: 'Free Time for Rest or Shopping' },
      { time: '12:00 PM', activity: 'Dhuhr Prayer at Masjid Al-Nabawi' },
      { time: '01:30 PM', activity: 'Lunch at Local Restaurant' },
      { time: '03:00 PM', activity: 'Optional City Tour in Medinah' },
      { time: '07:00 PM', activity: 'Farewell Dinner at Hotel 2' },
      { time: '09:00 PM', activity: 'Packing and Preparation for Departure' }
    ]
  }
]

import img2 from '@/assets/image/hajj/hajj-1.jpg'
import img3 from '@/assets/image/hajj/hajj-5.jpg'
import img1 from '@/assets/image/hajj/umrah-1.jpg'
export const packages = [
  {
    id: '1',
    pkgId: 'PKG12345',
    country: 'USA',
    airport: 'Huoston Airport',
    city: 'Texas',
    title: 'Umrah Package November 2024',
    imam: 'Shayek Imran',
    agent: 'MD Karim',
    support_manager: 'Abdur Rahman',
    startDate: '1st Nov, 2024',
    endDate: '10th Nov, 2024',
    description:
      'Our meticulously designed package guarantees an unforgettable Umrah experience, with knowledgeable professionals guiding you every step of the way.',
    img: img1,
    status: 'In Plan',
    customerStatus: 'Wishlisted',
  },
  {
    id: '2',
    pkgId: 'PKG67890',
    country: 'Canada',
    airport: 'Torronto Airport',
    city: 'Toronto',
    imam: 'Shayek Imran',
    agent: 'MD Karim',
    support_manager: 'Abdur Rahman',
    title: 'Umrah Package December 2024',
    startDate: '5th Dec, 2024',
    endDate: '15th Dec, 2024',
    description:
      'Experience the ultimate comfort and convenience with our Deluxe Umrah Package, featuring exclusive services and amenities.',
    img: img2,
    status: 'In Preparation',
    customerStatus: 'Purchased',
  },
  {
    id: '3',
    pkgId: 'PKG678100',
    country: 'USA',
    airport: 'JFK Airport',
    city: 'New York',
    imam: 'Shayek Imran',
    agent: 'MD Karim',
    support_manager: 'Abdur Rahman',
    title: 'Umrah Package December 2024',
    startDate: '15th Dec, 2024',
    endDate: '25th Dec, 2024',
    description:
      'Experience the ultimate comfort and convenience with our Premium Umrah Package, featuring exclusive services and amenities, with knowledgeable professionals guiding you every step of the way.',
    img: img3,
    status: 'In Review',
    customerStatus: 'Ongoing',
  },
  {
    id: '4',
    pkgId: 'PKG678100',
    country: 'USA',
    airport: 'Philadelphia International Airport',
    city: 'Philadelphia',
    imam: 'Shayek Imran',
    agent: 'MD Karim',
    support_manager: 'Abdur Rahman',
    title: 'Umrah Package December 2025',
    startDate: '15th Jan, 2025',
    endDate: '25th Jan, 2025',
    description:
      'Experience the ultimate comfort and convenience with our Premium Umrah Package, featuring exclusive services and amenities, with knowledgeable professionals guiding you every step of the way.',
    img: img3,
    status: 'In Review',
    customerStatus: 'Completed',
  }
]
