import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// import { createRouter, createWebHistory } from 'vue-router'

import LcFrntPageLayout from '../views/learning-center/layouts/website/FrontPageLayout.vue'

import AuthLayout from '../views/learning-center/layouts/website/AuthLayout.vue'
import DashboardLayout from '../views/learning-center/layouts/dashboard/DashboardLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' })
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/services',
      name: 'services',

      component: () => import('../views/Services/NikahService.vue'),
      children: [
        {
          path: 'nikah',
          name: 'nikah',
          component: () => import('../views/Services/NikahService.vue')
        }
      ]
    },
    {
      path: '/services/facilities',
      name: 'services/facilities',
      component: () => import('../views/Services/FacilitiesService.vue')
    },
    {
      path: '/services/education',
      name: 'services/education',
      component: () => import('../views/Services/EducationService.vue')
    },
    {
      path: '/services/funeral',
      name: 'services/funeral',
      component: () => import('../views/Services/FuneralService.vue')
    },
    {
      path: '/services/matrimony',
      name: 'services/matrimony',
      component: () => import('../views/Services/MatrimonyService.vue')
    },
    {
      path: '/services/new_muslim',
      name: 'services/new_muslim',
      component: () => import('../views/Services/NewMuslimService.vue')
    },
    {
      path: '/services/special_needs',
      name: 'services/special_needs',
      component: () => import('../views/Services/SpecialNeedsService.vue')
    },
    {
      path: '/services/social',
      name: 'services/social',
      component: () => import('../views/Services/SocialService.vue')
    },

    {
      path: '/explore/dua',
      name: 'explore/dua',
      component: () => import('../views/Explore/Dua.vue')
    },
    {
      path: '/explore/hadith',
      name: 'explore/hadith',
      component: () => import('../views/Explore/Hadith.vue')
    },
    {
      path: '/explore/watch',
      name: 'explore/watch',
      component: () => import('../views/Explore/Watch.vue')
    },
    {
      path: '/explore/publications',
      name: 'explore/publications',
      component: () => import('../views/Explore/Publications.vue')
    },
    {
      path: '/explore/quran',
      name: 'explore/quran',
      component: () => import('../views/Explore/Quran.vue')
    },
    {
      path: '/explore/quran/:id',
      name: 'explore/quranview',
      component: () => import('../views/Explore/QuranView.vue')
    },

    {
      path: '/about/board_of_directors',
      name: 'about/board_of_directors',
      component: () => import('../views/AboutUs/BoardOfDirectors.vue')
    },
    {
      path: '/about/about_us',
      name: 'about/about_us',
      component: () => import('../views/AboutUs/About.vue')
    },
    {
      path: '/about/committees',
      name: 'about/committees',
      component: () => import('../views/AboutUs/Committees.vue')
    },
    {
      path: '/about/policies',
      name: 'about/policies',
      component: () => import('../views/AboutUs/Policies.vue')
    },
    {
      path: '/about/team',
      name: 'about/team',
      component: () => import('../views/AboutUs/Team.vue')
    },

    {
      path: '/contact/ask_imam',
      name: 'contact/ask_imam',
      component: () => import('../views/Contact/AskImam.vue')
    },
    {
      path: '/contact/ask_scholar',
      name: 'contact/ask_scholar',
      component: () => import('../views/Contact/AskScholar.vue')
    },
    {
      path: '/contact/get_appointment',
      name: 'contact/get_appointment',
      component: () => import('../views/Contact/GetAppointment.vue')
    },
    {
      path: '/contact/contact_us',
      name: 'contact/contact_us',
      component: () => import('../views/Contact/ContactUs.vue')
    },
    {
      path: '/contact/mashjid_info',
      name: 'contact/mashjid_info',
      component: () => import('../views/Contact/MashjidInfo.vue')
    },

    {
      path: '/employees/employeeLogin',
      name: 'Employee Login',
      component: () => import('../views/Employees/EmployeeLogin.vue')
    },

    {
      path: '/HR-Login',
      name: 'HR-Login',
      component: () => import('../views/Employees/HR_Login.vue')
    },
    {
      path: '/activity/event',
      name: 'Event',
      component: () => import('../views/Activity/Event.vue')
    },
    {
      path: '/activity/events',
      name: 'Events',
      component: () => import('../views/Activity/Events.vue')
    },
    {
      path: '/activity/project',
      name: 'activity/project',
      component: () => import('../views/Activity/Project.vue')
    },
    {
      path: '/activity/projects',
      name: 'projects',
      component: () => import('../views/Activity/Projects.vue')
    },

    {
      path: '/volunteer/educate_the_children',
      name: 'volunteer/educate_the_children',
      component: () => import('../views/Volunteer/EducateTheChildren.vue')
    },
    {
      path: '/volunteer/shelter_the_homeless',
      name: 'volunteer/shelter_the_homeless',
      component: () => import('../views/Volunteer/ShelterHomeless.vue')
    },
    {
      path: '/volunteer/enhance_social_jsustice',
      name: 'volunteer/enhance_social_jsustice',
      component: () => import('../views/Volunteer/EnhanceSocialJustice.vue')
    },
    {
      path: '/volunteer/feed_the_hungry',
      name: 'volunteer/feed_the_hungry',
      component: () => import('../views/Volunteer/FeedTheHungry.vue')
    },
    {
      path: '/volunteer/comfort_the_sick',
      name: 'volunteer/comfort_the_sick',
      component: () => import('../views/Volunteer/ComfortTheSick.vue')
    },

    {
      path: '/more/hajj_and_umrah',
      name: 'more/hajj_and_umrah',
      component: () => import('../views/More/HajjAndUmrah.vue')
    },
    {
      path: '/more/ramadan_special',
      name: 'more/ramadan_special',
      component: () => import('../views/More/RamadanSpecial.vue')
    },
    {
      path: '/Member_Donation',
      name: 'Member Donation',
      component: () => import('../views/Donation/DonationView.vue')
    },
    {
      path: '/Guest_Donation',
      name: 'Guest Donation',
      component: () => import('../views/Donation/DonationView.vue')
    },
    {
      path: '/onsitelearning',
      name: 'onsitelearning',
      component: () => import('../views/OnsiteEducation.vue')
    },
    {
      path: '/studentadmission',
      name: 'studentadmission',
      component: () => import('../views/LearningCenter/StudentAdmission.vue')
    },
    {
      path: '/volunteers/volunteeradmission',
      name: 'volunteeradmission',
      component: () => import('../views/GetInvolved/Volunteers/VolunteerAdmission.vue')
    },
    {
      path: '/volunteerLogin',
      name: 'Volunteer Login',
      component: () => import('../views/Auth/LogIn.vue')
    },
    {
      path: '/volunteer',
      name: 'Volunteer_Dashboard',
      // component: () => import('../views/Hr/HrDashbord.vue')
      component: () => import('../views/GetInvolved/Volunteers/VolunteerDashboard.vue')
    },
    {
      path: '/getinvolved/applyforspeaker',
      name: 'applyforspeaker',
      component: () => import('../views/GetInvolved/ApplyForSpeaker.vue')
    },
    {
      path: '/getinvolved/applyforimam',
      name: 'applyforimam',
      component: () => import('../views/GetInvolved/ApplyForGuestImam.vue')
    },
    {
      path: '/Fund_Raising',
      name: 'Fund_Raising',
      component: () => import('../views/GetInvolved/FundRaising/FundRaising.vue')
    },
    {
      path: '/Fund_Raising_Form',
      name: 'Fund_Raising_Form',
      component: () => import('../views/GetInvolved/FundRaising/FundRaisingForm.vue')
    },
    {
      path: '/learing-center/education-form',
      name: '/learing-center/education-form',
      component: () => import('../views/LearningCenter/LearningCenterEducationForm.vue')
    },
    {
      path: '/more/registration/memebship_registration',
      name: 'more/registration/memebship_registration',
      component: () => import('../views/More/Registration/MemebshipRegistration.vue')
    },
    {
      path: '/more/registration/mosjid_wavier_and_release_liability',
      name: 'more/registration/mosjid_wavier_and_release_liability',
      component: () => import('../views/More/Registration/MosjidWavierAndReleaseLiability.vue')
    },
    {
      path: '/more/registration/sports_and_recreation_event',
      name: 'more/registration/sports_and_recreation_event',
      component: () => import('../views/More/Registration/SportsAndRecreationEvent.vue')
    },
    {
      path: '/more/registration/esl_class_registration',
      name: 'more/registration/esl_class_registration',
      component: () => import('../views/More/Registration/ESLClassRegistration.vue')
    },
    {
      path: '/Member_Login',
      name: 'Member Login',
      component: () => import('../views/Auth/LogIn.vue')
    },
    {
      path: '/Membar_Dashboard',
      name: 'Membar_Dashboard',
      component: () => import('../views/Member/MembarDashbord.vue')
    },

    {
      path: '/Admin_Login',
      name: 'Admin Login',
      component: () => import('../views/Auth/LogIn.vue')
    },
    {
      path: '/Admin_Dashboard',
      name: 'Admin_Dashboard',
      component: () => import('../views/Admin/AdminDashboard.vue')
    },

    {
      path: '/Social_Service_Login',
      name: 'Social Service Login',
      component: () => import('../views/Auth/LogIn.vue')
    },
    {
      path: '/Social_Service_Dashboard',
      name: 'Social_Dashboard',
      component: () => import('../views/Social/SocialDashboard.vue')
    },
    {
      path: '/Social_Service_Event_List',
      name: 'Social_Service_Event_List',
      component: () => import('../views/Social/SocialManagementEventList.vue')
    },
    {
      path: '/Social_Service_Project_List',
      name: 'Social_Service_Project_List',
      component: () => import('../views/Social/SocialManagementProjectList.vue')
    },
    {
      path: '/Social_Service_Event_Create',
      name: 'Social_Service_Event_Create',
      component: () => import('../views/Social/SocialManegementEventCreate.vue')
    },
    {
      path: '/Social_Service_Project_Create',
      name: 'Social_Service_Project_Create',
      component: () => import('../views/Social/SocialManagementProjectCreate.vue')
    },
    {
      path: '/Social_Gallery',
      name: 'Social Gallery',
      component: () => import('../views/Social/SocialGallery.vue')
    },
    {
      path: '/Social_Change_Password',
      name: 'Social_Change_Password',
      component: () => import('../views/Social/Profile/SocialChangePassword.vue')
    },

    {
      path: '/Youth_Management_Login',
      name: 'Youth Management Login',
      component: () => import('../views/Auth/LogIn.vue')
    },
    {
      path: '/year_planner/:id',
      name: 'year_planner',
      component: () => import('../components/HomeFolder/YearlyPlannerDetails.vue')
    },
    {
      path: '/yearlyPlannerDetails',
      name: 'yearlyPlannerDetails',
      component: () => import('../components/HomeFolder/YearlyPlannerDetails24.vue')
    },
    {
      path: '/Youth_Management_Dashboard',
      name: 'Youth_Dashboard',
      component: () => import('../views/Youth/YouthDashborad.vue')
    },
    {
      path: '/Youth_Program_Create',
      name: 'Youth_Program_Create',
      component: () => import('../views/Youth/YouthProgramCreate.vue')
    },
    {
      path: '/Youth_Program_List',
      name: 'Youth_Program_List',
      component: () => import('../views/Youth/YouthProgramList.vue')
    },

    {
      path: '/Finance_Login',
      name: 'Finance Login',
      component: () => import('../views/Auth/LogIn.vue')
    },
    {
      path: '/Finance_Dashboard',
      name: 'Finance_Dashboard',
      component: () => import('../views/Finance/FinanceDashboard.vue')
    },
    {
      path: '/Finance_Accounts',
      name: 'Finance_Accounts',
      component: () => import('../views/Finance/Accounts.vue')
    },
    {
      path: '/Finance_Operational_Expenses',
      name: 'Finance_Operational_Expenses',
      component: () => import('../views/Finance/OperationalExpenses.vue')
    },
    {
      path: '/Finance_Project_Expenses',
      name: 'Finance_Project_Expenses',
      component: () => import('../views/Finance/ProjectExpenses.vue')
    },
    {
      path: '/Finance_Deposits',
      name: 'Finance_Deposits',
      component: () => import('../views/Finance/FinanceDeposits.vue')
    },
    {
      path: '/Finance_Donations',
      name: 'Finance_Donations',
      component: () => import('../views/Finance/Donations.vue')
    },

    {
      path: '/Education_Login',
      name: 'Education Login',
      component: () => import('../views/Auth/LogIn.vue')
    },
    {
      path: '/Education_Dashboard',
      name: 'Education_Dashboard',
      component: () => import('../views/Education/EducationDashboard.vue')
    },
    {
      path: '/Supply_Chain_Management_Login',
      name: 'Supply Chain Management Login',
      component: () => import('../views/Auth/LogIn.vue')
    },
    {
      path: '/Supply_Chain_Management_Chain_Management_Dashboard',
      name: 'Supply_Dashboard',
      component: () => import('../views/Supply/SupplyDashbord.vue')
    },
    {
      path: '/Supply_Create_Order',
      name: 'Supply_Create_Order',
      component: () => import('../views/Supply/OrderCreate.vue')
    },
    {
      path: '/Supply_Create_Supplier',
      name: 'Supply_Create_Supplier',
      component: () => import('../views/Supply/CreateSupplier.vue')
    },
    {
      path: '/Supply_Order_List',
      name: 'Supply_Order_List',
      component: () => import('../views/Supply/OrderList.vue')
    },
    {
      path: '/Supply_Supplier_List',
      name: 'Supply_Supplier_List',
      component: () => import('../views/Supply/SupplierList.vue')
    },

    {
      path: '/HR_Login',
      name: 'HR Login',
      component: () => import('../views/Auth/LogIn.vue')
    },
    {
      path: '/HR_Dashboard',
      name: 'HR_Dashboard',
      component: () => import('../views/Hr/HrDashbord.vue')
    },
    {
      path: '/HR_Employment_Scheduling',
      name: 'HR_Employment_Scheduling',
      component: () => import('../views/Hr/EmploymentScheduling.vue')
    },
    {
      path: '/HR_Create_Job_Description',
      name: 'HR_Create_Job_Description',
      component: () => import('../views/Hr/CreateJobDescription.vue')
    },

    {
      path: '/Operation_Login',
      name: 'Operation Login',
      component: () => import('../views/Auth/LogIn.vue')
    },
    {
      path: '/Opration_Dashboard',
      name: 'Operation_Dashboard',
      component: () => import('../views/Operation/OprationDashbord.vue')
    },
    {
      path: '/Opration_Meeting_Create',
      name: 'Opration_Meeting_Create',
      component: () => import('../views/Operation/MeetingCreate.vue')
    },
    {
      path: '/Signup',
      name: 'Signup',
      component: () => import('../views/Auth/SingnUp.vue')
    },
    {
      path: '/boardmemberlogin',
      name: 'boardmemberlogin',
      component: () => import('../views/Activity/BoardMemberLogin.vue')
    },
    {
      path: '/Membar_Dashboard',
      name: 'Membar_Dashboard',
      component: () => import('../views/Member/MembarDashbord.vue')
    },
    {
      path: '/Membar_Event_History',
      name: 'Membar_Event_History',
      component: () => import('../views/Member/MemberEventHistory.vue')
    },
    {
      path: '/Membar_Donation_History',
      name: 'Membar_Donation_History',
      component: () => import('../views/Member/Profile/MemberDonationHistory.vue')
    },
    {
      path: '/Membar_Payment_History',
      name: 'Membar_Payment_History',
      component: () => import('../views/Member/Profile/MembarPaymentHistory.vue')
    },
    {
      path: '/Membar_Change_Password',
      name: 'Membar_Change_Password',
      component: () => import('../views/Member/Profile/MemberPassChange.vue')
    },
    {
      path: '/Select_Volunteer',
      name: 'Select Volunteer',
      component: () => import('../views/Member/MemberVolunteerSelect.vue')
    },
    {
      path: '/Select_Imam',
      name: 'Select Imam',
      component: () => import('../views/Member/MemberImamSelect.vue')
    },
    {
      path: '/Prayer_Time',
      name: 'Prayer_Time',
      component: () => import('../views/Services/PrayerService/PrayerTime.vue')
    },
    {
      path: '/Prayer_Announcement',
      name: 'Prayer_Announcement',
      component: () => import('../views/Services/PrayerService/PrayerAnnouncement.vue')
    },
    {
      path: '/Next_Prayer_Service',
      name: 'Next_Prayer_Service',
      component: () => import('../views/Services/PrayerService/NextPrayerService.vue')
    },
    {
      path: '/Recent_Prayer_Service',
      name: 'Recent_Prayer_Service',
      component: () => import('../views/Services/PrayerService/RecentPrayerService.vue')
    },
    {
      path: '/Makkah_Live',
      name: 'Makkah_Live',
      component: () => import('../views/Services/PrayerService/MakkhaLive.vue')
    },
    {
      path: '/Janaja_Announcement',
      name: 'Janaja_Announcement',
      component: () => import('../views/Services/PrayerService/JanajaService.vue')
    },
    {
      path: '/Ranadam_Payer_Time',
      name: 'Ranadam_Payer_Time',
      component: () => import('../views/Services/PrayerService/RamadanPrayerTime.vue')
    },

    {
      path: '/Kabah',
      name: 'Kabah',
      component: () => import('../views/Gallery/Kabah.vue')
    },
    {
      path: '/Mashjib',
      name: 'Mashjib',
      component: () => import('../views/Gallery/Mashjid.vue')
    },
    {
      path: '/Social_Gallery',
      name: 'Social_Gallery',
      component: () => import('../views/Gallery/SocialGallery.vue')
    },
    {
      path: '/Event_Gallery',
      name: 'Event_Gallery',
      component: () => import('../views/Gallery/EventGallery.vue')
    },

    {
      path: '/Supply_Chain/supplier',
      name: 'supplier',
      component: () => import('../views/SupplyChain/Supplier.vue')
    },
    {
      path: '/Supply_Chain/customer',
      name: 'customer',
      component: () => import('../views/SupplyChain/Customer.vue')
    },
    {
      path: '/Supply_Chain/customerLogin',
      name: 'Customer Login',
      component: () => import('../views/SupplyChain/CustomerLogin.vue')
    },
    {
      path: '/Supply_Chain/supplierLogin',
      name: 'Supplier Login',
      component: () => import('../views/SupplyChain/SupplierLogin.vue')
    },

    {
      path: '/learning-center',
      name: 'LearningCenter',
      component: () => import('../views/learning-center/modules/website/LearningCenter.vue'),
      meta: { layout: LcFrntPageLayout }
    },
    {
      path: '/learning-center/programs',
      name: 'LearningCenterPrograms',
      component: () => import('../views/learning-center/modules/website/Programs.vue'),
      meta: { layout: LcFrntPageLayout }
    },
    {
      path: '/learning-center/all-courses',
      name: 'LearningCenterCourses',
      component: () => import('../views/learning-center/modules/website/AllCourses.vue'),
      meta: { layout: LcFrntPageLayout }
    },
    {
      path: '/management-login',
      name: 'ManagementLoginPage',
      component: () => import('../auth/ManagementLoginPage.vue'),
      meta: { layout: AuthLayout, notAuthenticated: true }
    },
    {
      path: '/student-login',
      name: 'LoginPage',
      component: () => import('../auth/LoginPage.vue'),
      meta: { layout: AuthLayout, notAuthenticated: true }
    },
    {
      path: '/teacher-login',
      name: 'TeacherLoginPage',
      component: () => import('../auth/TeacherLoginPage.vue'),
      meta: { layout: AuthLayout, notAuthenticated: true }
    },
    {
      path: '/forgot-pass',
      name: 'forgotPasswordPage',
      component: () => import('../auth/ForgotPasswordComponent.vue'),
      meta: { layout: AuthLayout, notAuthenticated: true }
    },

    {
      path: '/registration',
      name: 'RegistrationPage',
      component: () => import('../auth/RegistrationPage.vue'),
      meta: { layout: AuthLayout, notAuthenticated: true }
    },
    {
      path: '/reg-teacher',
      name: 'TeacherRegistrationPage',
      component: () => import('../auth/RegistrationPageTeacher.vue'),
      meta: { layout: AuthLayout, notAuthenticated: true }
    },
    {
      path: '/management-registration',
      name: 'ManagementRegistrationPage',
      component: () => import('../auth/ManagementRegistrationPage.vue'),
      meta: { layout: AuthLayout, notAuthenticated: true }
    },

    // {
    //     path: '/teacher-registration',
    //     name: 'RegistrationPageTeacher',
    //     component: () => import('../auth/RegistrationPageTeacher'),
    //     meta: { layout: AuthLayout, notAuthenticated: true }
    // },
    {
      path: '/my-registration',
      name: 'StudentRegistrationPage',
      component: () =>
        import('/src/views/learning-center/modules/dashboard/student/StudentRegistrationPage.vue'),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/dashboard/my-admin',
      name: 'MyAdminPage',
      component: () => import('/src/views/learning-center/modules/dashboard/MyAdminPage.vue'),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/dashboard/my-advisor',
      name: 'MyAdvisor',
      component: () => import('/src/views/learning-center/modules/dashboard/MyAdvisor.vue'),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/dashboard/my-students',
      name: 'MyStudentPage',
      component: () =>
        import('/src/views/learning-center/modules/dashboard/teacher/MyStudentPage.vue'),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/dashboard/my-teachers',
      name: 'MyTeacherPage',
      component: () =>
        import('/src/views/learning-center/modules/dashboard/student/MyTeacherPage.vue'),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/dashboard/my-schedule',
      name: 'MySchedulePage',
      component: () => import('/src/views/learning-center/modules/dashboard/MySchedulePage.vue'),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/dashboard/help-center',
      name: 'HelpCenter',
      component: () => import('/src/views/learning-center/modules/dashboard/HelpCenter.vue'),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },

    {
      path: '/verify-teacher',
      name: 'RegistrationPageTeacher',
      component: () =>
        import('/src/views/learning-center/modules/dashboard/TeacherVerificationPage.vue'),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/learning-center/areas/:id',
      name: 'AreaPage',
      component: () => import('/src/views/learning-center/modules/website/AreaPage.vue'),
      meta: { layout: LcFrntPageLayout }
    },

    {
      path: '/learning-center/programs/:id',
      name: 'ProgramPage',
      component: () => import('/src/views/learning-center/modules/website/ProgramPage.vue'),
      meta: { layout: LcFrntPageLayout }
    },
    {
      path: '/learning-center/course/:id',
      name: 'CourseDetailsPage',
      component: () => import('/src/views/learning-center/modules/website/CourseDetailsPage.vue'),
      meta: { layout: LcFrntPageLayout }
    },
    {
      path: '/dashboard',
      name: 'DashboardPage',
      component: () => import('/src/views/learning-center/modules/dashboard/DashboardPage.vue'),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/dashboard/profile',
      name: 'ProfilePage',
      component: () => import('/src/views/learning-center/modules/dashboard/ProfilePage.vue'),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/dashboard/join-class',
      name: 'JoinClassPage',
      component: () =>
        import('/src/views/learning-center/modules/dashboard/teacher/JoinClassPage.vue'),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/dashboard/teacher/join-class',
      name: 'JoinClassTeacher',
      component: () =>
        import('/src/views/learning-center/modules/dashboard/teacher/JoinClassTeacher.vue'),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/dashboard/teacher-verify',
      name: 'JoinClassPage',
      component: () =>
        import('/src/views/learning-center/modules/dashboard/teacher/JoinClassPage.vue'),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/dashboard/my-classes/:id',
      name: 'ClassListPage',
      component: () => import('/src/views/learning-center/modules/dashboard/ClassListPage.vue'),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/dashboard/my-courses',
      name: 'CoursePage',
      component: () =>
        import('/src/views/learning-center/modules/dashboard/student/CoursePage.vue'),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },

    {
      path: '/dashboard/ongoing-courses',
      name: 'OngoingCoursePage',
      component: () =>
        import('/src/views/learning-center/modules/dashboard/teacher/OngoingCoursesPage.vue'),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/dashboard/all-courses',
      name: 'AllCoursePage',
      component: () =>
        import('/src/views/learning-center/modules/dashboard/teacher/AllCoursesPage.vue'),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/dashboard/my-courses/teacher-schedule/:courseId/:teacherId',
      name: 'TeacherSchedulePage',
      component: () =>
        import('/src/views/learning-center/modules/dashboard/TeacherSchedulePage.vue'),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/dashboard/my-courses/schedule/:id',
      name: 'ClassSchedulePage',
      component: () =>
        import('/src/views/learning-center/modules/dashboard/student/ClassSchedulePage.vue'),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/dashboard/advisors',
      name: 'AdvisorListPage',
      component: () =>
        import('/src/views/learning-center/modules/dashboard/management/AdvisorListPage.vue'),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/dashboard/group',
      name: 'GroupListPage',
      component: () =>
        import('/src/views/learning-center/modules/dashboard/management/GroupCourseListPage.vue'),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/dashboard/old-teachers',
      name: 'OldTeacherListPage',
      component: () =>
        import(
          '/src/views/learning-center/modules/dashboard/management/teacher/OldTeacherListPage.vue'
        ),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/dashboard/current-teachers',
      name: 'CurrentTeacherListPage',
      component: () =>
        import(
          '/src/views/learning-center/modules/dashboard/management/teacher/CurrentTeacherListPage.vue'
        ),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/dashboard/new-teachers',
      name: 'NewTeacherListPage',
      component: () =>
        import(
          '/src/views/learning-center/modules/dashboard/management/teacher/NewTeacherListPage.vue'
        ),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/dashboard/teacher-details/:id',
      name: 'TeacherDetailsPage',
      component: () =>
        import(
          '/src/views/learning-center/modules/dashboard/management/teacher/TeacherDetailsPage.vue'
        ),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/dashboard/old-students',
      name: 'OldStudentListPage',
      component: () =>
        import(
          '/src/views/learning-center/modules/dashboard/management/student/OldStudentListPage.vue'
        ),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/dashboard/current-students',
      name: 'CurrentStudentListPage',
      component: () =>
        import(
          '/src/views/learning-center/modules/dashboard/management/student/CurrentStudentListPage.vue'
        ),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/dashboard/new-students',
      name: 'NewStudentListPage',
      component: () =>
        import(
          '/src/views/learning-center/modules/dashboard/management/student/NewStudentListPage.vue'
        ),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/dashboard/student-details/:id',
      name: 'StudentDetailsPage',
      component: () =>
        import(
          '/src/views/learning-center/modules/dashboard/management/student/StudentDetailsPage.vue'
        ),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/dashboard/in-registration-process',
      name: 'InRegistrationProcess',
      component: () =>
        import(
          '/src/views/learning-center/modules/dashboard/management/student/InRegistrationProcess.vue'
        ),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/dashboard/student-group-course',
      name: 'StudentGroupCourse',
      component: () =>
        import('/src/views/learning-center/modules/dashboard/management/student/GroupCourse.vue'),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    // Advisor
    {
      path: '/advisor/dashboard/schedule/list',
      name: 'ScheduleList',
      component: () =>
        import('/src/views/learning-center/modules/dashboard/advisor/ScheduleList.vue'),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/advisor/dashboard/schedule/create',
      name: 'createSchedule',
      component: () =>
        import('/src/views/learning-center/modules/dashboard/advisor/createSchedule.vue'),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/dashboard/enrollment-schedule/:id',
      name: 'createScheduleFromEnrollment',
      component: () =>
        import(
          '/src/views/learning-center/modules/dashboard/advisor/createScheduleFromEnrollment.vue'
        ),
      props: (route) => ({
        teacher: route.query.teacher,
        student: route.query.student,
        course: route.query.course
      }),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/dashboard/enrollment-schedule/:id',
      name: 'AdvisorCreateScheduleFromEnrollment',
      component: () =>
        import(
          '/src/views/learning-center/modules/dashboard/advisor/AdvisorCreateScheduleFromEnrollment.vue'
        ),
      props: (route) => ({
        teacher: route.query.teacher,
        student: route.query.student,
        course: route.query.course
      }),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/advisor/dashboard/enrollment',
      name: 'EnrollmentList',
      component: () =>
        import('/src/views/learning-center/modules/dashboard/advisor/EnrollmentList.vue'),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/advisor/dashboard/students',
      name: 'StudentList',
      component: () =>
        import('/src/views/learning-center/modules/dashboard/advisor/StudentList.vue'),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/advisor/dashboard/teachers',
      name: 'TeacherList',
      component: () =>
        import('/src/views/learning-center/modules/dashboard/advisor/TeacherList.vue'),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/advisor/dashboard/group-list',
      name: 'GroupList',
      component: () => import('/src/views/learning-center/modules/dashboard/advisor/GroupList.vue'),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/advisor/dashboard/courses',
      name: 'CourseList',
      component: () =>
        import('/src/views/learning-center/modules/dashboard/advisor/CourseList.vue'),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    // dashboard settings
    {
      path: '/dashboard/settings/update-profile',
      name: 'UpdateProfile',
      component: () => import('/src/views/learning-center/modules/dashboard/UpdateProfile.vue'),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },

    {
      path: '/dashboard/settings/update-password',
      name: 'UpdatePassword',
      component: () =>
        import('/src/views/learning-center/modules/dashboard/UpdatePasswordPage.vue'),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/dashboard/course-modules/:id',
      name: 'CourseModulesPage',
      component: () => import('/src/views/learning-center/modules/dashboard/CourseModulesPage.vue'),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },
    {
      path: '/dashboard/my-purchases',
      name: 'PurchasePage',
      component: () => import('/src/views/learning-center/modules/dashboard/PurchasePage.vue'),
      meta: { layout: DashboardLayout, requiresAuth: true }
    },

    // Course Enrollment
    {
      path: '/learning-center/course/:id/enroll',
      name: 'CourseEnrollment',
      component: () =>
        import('/src/views/learning-center/modules/website/enrollment/CourseEnrollmentPage.vue'),
      meta: { layout: LcFrntPageLayout, requiresAuth: true }
    },
    {
      path: '/learning-center/cart',
      name: 'CartPage',
      component: () => import('/src/views/learning-center/modules/website/enrollment/CartPage.vue'),
      meta: { layout: LcFrntPageLayout, requiresAuth: true }
    },
    {
      path: '/learning-center/checkout',
      name: 'CheckoutPage',
      component: () =>
        import('/src/views/learning-center/modules/website/enrollment/CheckoutPage.vue'),
      meta: { layout: LcFrntPageLayout, requiresAuth: true }
    },
    {
      path: '/learning-center/success',
      name: 'PaymentSuccess',
      component: () =>
        import('/src/views/learning-center/modules/website/enrollment/PaymentSuccess.vue'),
      meta: { layout: DashboardLayout }
    },
    {
      path: '/learning-center/failed',
      name: 'PaymentFailed',
      component: () =>
        import('/src/views/learning-center/modules/website/enrollment/PaymentFailed.vue'),
      meta: { layout: LcFrntPageLayout }
    },
    {
      path: '/:catchAll(.*)*',
      name: 'NotfoundPage',
      component: () => import('/src/views/learning-center/modules/website/NotfoundPage.vue'),
      meta: { layout: LcFrntPageLayout }
    }
  ]
})

export default router
