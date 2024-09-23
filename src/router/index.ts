import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


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

    //Hajj Management System
    {
      path: '/Hajj_Management_Login',
      name: 'Hajj_Management_Login',
      component: () => import('../views/Auth/LogIn.vue')
    },
    {
      path: '/hajj-services',
      name: 'hajj-services',
      component: () => import('../views/Services/hajj-services.vue')
    },

    //Umrah Management System

    {
      path: '/Umrah_Management_Login',
      name: 'Umrah_Management_Login',
      component: () => import('../views/Auth/LogIn.vue')
    },
    {
      path: '/Umrah_packageList/:id',
      name: 'Umrah_packageList',
      component: () => import('../views/website/Umrah/UmrahPackageList.vue')
    },
    {
      path: '/umrah-services',
      name: 'umrah-services',
      component: () => import('../views/Services/umrah-services.vue')
    },

    {
      path: '/Travel_Management_Login',
      name: 'Travel_Management_Login',
      component: () => import('../views/Auth/LogIn.vue')
    },

    {
      path: '/hajj-package',
      name: 'hajj-package',
      component: () => import('../views/website/Hajj/hajj-package.vue')
    },

    {
      path: '/hajj-facilities',
      name: 'hajj-facilities',
      component: () => import('../views/website/Hajj/hajj-facilities.vue')
    },

    {
      path: '/hajj-videos',
      name: 'hajj-videos',
      component: () => import('../views/website/Hajj/hajj-video.vue')
    },

    {
      path: '/hajj-traning',
      name: 'hajj-traning',
      component: () => import('../views/website/Hajj/hajj-traning.vue')
    },

    {
      path: '/hajj-faqs',
      name: 'hajj-faqs',
      component: () => import('../views/website/Hajj/hajj-faqs.vue')
    },

    {
      path: '/umrah-package',
      name: 'umrah-package',
      component: () => import('../views/website/Umrah/umrah-package.vue')
    },
    {
      path: '/umrah-details/:id',
      name: 'umrah-details',
      component: () => import('../views/website/Umrah/umrah-details.vue'),
      props: true
    },

    {
      path: '/umrah-international',
      name: 'umrah-international',
      component: () => import('../views/website/Umrah/umrah-international.vue')
    },

    {
      path: '/umrah-visa',
      name: '/umrah-visa',
      component: () => import('../views/website/Umrah/umrah-visa.vue')
    },

    // log in sign up
    {
      path: '/Signup',
      name: 'Signup',
      component: () => import('../views/Auth/SingnUp.vue')
    },

    {
      path: '/HR-Login',
      name: 'HR-Login',
      component: () => import('../views/website/Employees/HR_Login.vue')
    },

    // website

    {
      path: '/announcement/:id',
      name: 'announcementDetails',
      component: () => import('@/components/HomeFolder/AnnouncementDetails.vue')
    },
    {
      path: '/announcementList',
      name: 'announcementList',
      component: () => import('@/components/HomeFolder/AnnouncementList.vue')
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
      path: '/about/about_us',
      name: 'about/about_us',
      component: () => import('../views/website/AboutUs/About.vue')
    },

    {
      path: '/contact/ask_imam',
      name: 'contact/ask_imam',
      component: () => import('../views/website/Contact/AskImam.vue')
    },
    {
      path: '/contact/ask_scholar',
      name: 'contact/ask_scholar',
      component: () => import('../views/website/Contact/AskScholar.vue')
    },
    {
      path: '/contact/get_appointment',
      name: 'contact/get_appointment',
      component: () => import('../views/website/Contact/GetAppointment.vue')
    },
    {
      path: '/contact/contact_us',
      name: 'contact/contact_us',
      component: () => import('../views/website/Contact/ContactUs.vue')
    },

    {
      path: '/Kabah/:id',
      name: 'Kabah_Id',
      component: () => import('../views/website/Gallery/Kabah.vue')
    },

    {
      path: '/Mashjib',
      name: 'Mashjib',
      component: () => import('../views/website/Gallery/Mashjid.vue')
    },
    {
      path: '/Social_Gallery',
      name: 'Social_Gallery',
      component: () => import('../views/website/Gallery/SocialGallery.vue')
    },
    {
      path: '/Event_Gallery',
      name: 'Event_Gallery',
      component: () => import('../views/website/Gallery/EventGallery.vue')
    },

    {
      path: '/Supply_Chain/supplier',
      name: 'supplier',
      component: () => import('../views/website/SupplyChain/Supplier.vue')
    },
    {
      path: '/Supply_Chain/customer',
      name: 'customer',
      component: () => import('../views/website/SupplyChain/Customer.vue')
    },
    {
      path: '/Supply_Chain/customerLogin',
      name: 'Customer Login',
      component: () => import('../views/website/SupplyChain/CustomerLogin.vue')
    },
    {
      path: '/Supply_Chain/supplierLogin',
      name: 'Supplier Login',
      component: () => import('../views/website/SupplyChain/SupplierLogin.vue')
    },
    {
      path: '/Supply_Chain/vendor_registration',
      name: 'Vendor Registration',
      component: () => import('../views/website/SupplyChain/VendorRegister.vue')
    },

    {
      path: '/Supply_Chain/imam_registration',
      name: 'Imam Registration',
      component: () => import('../views/website/SupplyChain/imamRegister.vue')
    },
    {
      path: '/Supply_Chain/agent_registration',
      name: 'Agent Registration',
      component: () => import('../views/website/SupplyChain/agentRegister.vue')
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

    // admin

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

    //social service dashboard start
    {
      path: '/Social_Service_Login',
      name: 'Customer Login',
      component: () => import('../views/Auth/LogIn.vue')
    },
    {
      path: '/Hajj_Management_System',
      name: 'Hajj_Management_System',
      component: () => import('../views/Admin/HajjModule/Dashboard.vue'),
      children: [
        {
          path: '/hajj_package_create_new_package',
          name: 'hajj_Package_Create_New_Package',
          component: () => import('@/views/Admin/HajjModule/CreateNewPackage.vue')
        },
        {
          path: '/hajj_package_current_packages',
          name: 'hajj_Package_Current_Packages',
          component: () => import('@/views/Admin/HajjModule/CurrentPackages.vue')
        },
        {
          path: '/hajj_package_previous_packages',
          name: 'hajj_Package_Previous_Packages',
          component: () => import('@/views/Admin/HajjModule/PreviousPackages.vue')
        }
      ]
    },
    {
      path: '/Umrah_Management_System',
      name: 'Umrah_Management_System',
      component: () => import('../views/Admin/UmrahModule/Layout.vue'),
      children: [
        {
          path: '/umrah_package_create_new_package',
          name: 'Umrah_Package_Create_New_Package',
          component: () => import('@/views/Admin/UmrahModule/CreateNewPackage.vue')
        },
        {
          path: '/dashboard',
          name: 'Umrah_Management_System_Dashboard',
          component: () => import('@/views/Admin/UmrahModule/Dashboard.vue')
        },
        {
          path: '/umrah_package_current_packages',
          name: 'Umrah_Package_Current_Packages',
          component: () => import('@/views/Admin/UmrahModule/CurrentPackages.vue')
        },
        {
          path: '/umrah_package_all_packages',
          name: 'Umrah_Package_all_Packages',
          component: () => import('@/views/Admin/UmrahModule/AllPackages.vue')
        },
        {
          path: '/umrah_package_previous_packages',
          name: 'Umrah_Package_Previous_Packages',
          component: () => import('@/views/Admin/UmrahModule/PreviousPackages.vue')
        },
        {
          path: '/umrah_package_upcoming_packages',
          name: 'Umrah_Package_Upcoming_Packages',
          component: () => import('@/views/Admin/UmrahModule/UpcomingPackages.vue')
        },
        {
          path: '/umrah_package_completed_packages',
          name: 'Umrah_Package_completed_Packages',
          component: () => import('@/views/Admin/UmrahModule/CompletedPackages.vue')
        },
        {
          path: '/package_details/:id',
          name: 'package-details',
          component: () => import('../views/Admin/UmrahModule/PackageDetails.vue')
        },
        {
          path: '/view_packages',
          name: 'view-details',
          component: () => import('../views/Admin/UmrahModule/ViewPackages.vue')
        }
      ]
    },
    {
      path: '/Travel_Management_System',
      name: 'Travel_Management_System',
      component: () => import('../views/Admin/TravelModule/CurrentPackages.vue'),
      children: [
        {
          path: '/travel_package_create_new_package',
          name: 'travel_Package_Create_New_Package',
          component: () => import('@/views/Admin/TravelModule/CreateNewPackage.vue')
        },
        {
          path: '/travel_package_current_packages',
          name: 'travel_Package_Current_Packages',
          component: () => import('@/views/Admin/TravelModule/CurrentPackages.vue')
        },
        {
          path: '/travel_package_previous_packages',
          name: 'travel_Package_Previous_Packages',
          component: () => import('@/views/Admin/TravelModule/PreviousPackages.vue')
        }
      ]
    },
    {
      path: '/Social_Service_Dashboard',
      name: 'Social_Dashboard',
      component: () => import('../views/Social/SocialDashboard.vue'),
      children: [
        {
          path: '/Social_Service_Event_Post',
          name: 'Social_Service_Event_Post',
          component: () => import('../views/Social/SocialManagementEventPost.vue')
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
          path: '/Social_Service_Event_List',
          name: 'Social_Service_Event_List',
          component: () => import('../views/Social/SocialManagementEventList.vue')
        },
        {
          path: '/Social_Service_Project_Post',
          name: 'Social_Service_Project_Post',
          component: () => import('../views/Social/SocialManagementProjectPost.vue')
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
        }
      ]
    },
    // agent login 
    {
      path: '/agent_login',
      name: 'Agent Login',
      component: () => import('../views/Auth/LogIn.vue')
    },
    {
      path: '/Agent_Dashboard',
      name: 'Agent_Dashboard',
      component: () => import('@/views/Agent/AgentDashboard.vue'),
      children: [
        {
          path: '/agent_profile',
          name: 'Agent_Dashboard_Profile',
          component: () => import('@/views/Agent/Profile/AgentProfile.vue')
        },
        // Packages
        {
          path: '/agent_packages_active_package',
          name: 'Agent_Packages_Active_Package',
          component: () => import('@/views/Agent/MyPackages/ActivePackages.vue')
        },
        {
          path: '/agent_packages_upcoming_package',
          name: 'Agent_Packages_Upcoming_Package',
          component: () => import('@/views/Agent/MyPackages/UpcomingPackages.vue')
        },
        {
          path: '/agent_packages_completed_package',
          name: 'Agent_Packages_Completed_Package',
          component: () => import('@/views/Agent/MyPackages/CompletedPackages.vue')
        },
        // Payments
        {
          path: '/agent_packages_pending_payments',
          name: 'Agent_Packages_Pending_payments',
          component: () => import('@/views/Agent/MyPayments/PendingPayments.vue')
        },
        {
          path: '/agent_packages_received_payments',
          name: 'Agent_Packages_Received_Payments',
          component: () => import('@/views/Agent/MyPayments/ReceivedPayments.vue')
        },
        {
          path: '/agent_packages_request_payments',
          name: 'Agent_Packages_Request_Payments',
          component: () => import('@/views/Agent/MyPayments/RequestPayment.vue')
        },
      ]
    },
    //Imam login
    {
      path: '/imam_login',
      name: 'Imam Login',
      component: () => import('../views/Auth/LogIn.vue')
    },


    // Imam Dashboard =================================
    {
      path: '/Imam_Dashboard',
      name: 'Imam_Dashboard',
      component: () => import('@/views/Imam/ImamDashboard.vue'),
      children: [
        {
          path: '/imam_profile',
          name: 'imam_Dashboard_Profile',
          component: () => import('@/views/Imam/Profile/ImamProfile.vue')
        },
        // Packages
        {
          path: '/imam_packages_active_package',
          name: 'imam_Packages_Active_Package',
          component: () => import('@/views/Imam/MyPackages/ActivePackages.vue')
        },
        {
          path: '/imam_packages_upcoming_package',
          name: 'imam_Packages_Upcoming_Package',
          component: () => import('@/views/Imam/MyPackages/UpcomingPackages.vue')
        },
        {
          path: '/imam_packages_completed_package',
          name: 'imam_Packages_Completed_Package',
          component: () => import('@/views/Imam/MyPackages/CompletedPackages.vue')
        },
        // Payments
        {
          path: '/imam_packages_pending_payments',
          name: 'imam_Packages_Pending_payments',
          component: () => import('@/views/Imam/MyPayments/PendingPayments.vue')
        },
        {
          path: '/imam_packages_received_payments',
          name: 'imam_Packages_Received_Payments',
          component: () => import('@/views/Imam/MyPayments/ReceivedPayments.vue')
        },
        {
          path: '/imam_packages_request_payments',
          name: 'imam_Packages_Request_Payments',
          component: () => import('@/views/Imam/MyPayments/RequestPayment.vue')
        },
      ]
    },
    //Imam Managemnte Login
    {
      path: '/imam_management_login',
      name: 'Imam Management Login',
      component: () => import('../views/Auth/LogIn.vue')
    },
    {
      path: '/Imam_management_Dashboard',
      name: 'Imam_Management_Dashboard',
      component: () => import('@/views/ImamManagement/ImamDashboard.vue'),
      children: [
        {
          path: '/Imam_management_Dashboard/Profile',
          name: 'Imam_Management_Dashboard_Profile',
          component: () => import('@/views/ImamManagement/Profile/ImamProfile.vue')
        },
      ]
    },
    //Customer Managemente Login
    {
      path: '/customer_management_login',
      name: 'Customer Management Login',
      component: () => import('../views/Auth/LogIn.vue')
    },
    {
      path: '/Customer_management_Dashboard',
      name: 'Customer_Management_Dashboard',
      component: () => import('@/views/CustomerManagement/Dashboard.vue'),
      children: [
        {
          path: '/Customer_management_Profile',
          name: 'Customer_Management_Profile',
          component: () => import('@/views/CustomerManagement/Profile/Profile.vue')
        },
      ]
    },

    //Agent Management Login
    {
      path: '/agent_management_login',
      name: 'Agent Management Login',
      component: () => import('../views/Auth/LogIn.vue')
    },
    {
      path: '/agent_management_Dashboard',
      name: 'Agent_Management_Dashboard',
      component: () => import('@/views/Admin/AgentManagement/AgentDashboard.vue'),
      children: [
        {
          path: '/agent_management_Profile',
          name: 'Agent_Management_Profile',
          component: () => import('@/views/Admin/AgentManagement/Profile/AgentProfile.vue')
        },
      ]
    },

    //Support Login
    {
      path: '/support_login',
      name: 'Support_Login',
      component: () => import('../views/Auth/LogIn.vue')
    },
    {
      path: '/support_Dashboard',
      name: 'Support_Dashboard',
      component: () => import('@/views/SupportDashboard/Dashboard.vue'),
      children: [
        {
          path: '/Support_profile',
          name: 'Support_Dashboard_Profile',
          component: () => import('@/views/SupportDashboard/Profile/SupportProfile.vue')
        },
        // Packages
        {
          path: '/support_packages_active_package',
          name: 'support_Packages_Active_Package',
          component: () => import('@/views/SupportDashboard/MyPackages/ActivePackages.vue')
        },
        {
          path: '/support_packages_upcoming_package',
          name: 'support_Packages_Upcoming_Package',
          component: () => import('@/views/SupportDashboard/MyPackages/UpcomingPackages.vue')
        },
        {
          path: '/support_packages_completed_package',
          name: 'support_Packages_Completed_Package',
          component: () => import('@/views/SupportDashboard/MyPackages/CompletedPackages.vue')
        },
        // Payments
        {
          path: '/support_packages_pending_payments',
          name: 'support_Packages_Pending_payments',
          component: () => import('@/views/SupportDashboard/MyPayments/PendingPayments.vue')
        },
        {
          path: '/support_packages_received_payments',
          name: 'support_Packages_Received_Payments',
          component: () => import('@/views/SupportDashboard/MyPayments/ReceivedPayments.vue')
        },
        {
          path: '/support_packages_request_payments',
          name: 'support_Packages_Request_Payments',
          component: () => import('@/views/SupportDashboard/MyPayments/RequestPayment.vue')
        },
      ]
    },
   
   
    //Agent Management Login
    {
      path: '/agent_management_login',
      name: 'Agent Management Login',
      component: () => import('../views/Auth/LogIn.vue')
    },
    {
      path: '/agent_management_Dashboard',
      name: 'Agent_Management_Dashboard',
      component: () => import('@/views/Admin/AgentManagement/AgentDashboard.vue'),
      children: [
        {
          path: '/agent_management_Profile',
          name: 'Agent_Management_Profile',
          component: () => import('@/views/Admin/AgentManagement/Profile/AgentProfile.vue')
        },
      ]
    },
    // social service dashboard end

    {
      path: '/vendor_login',
      name: 'Vendor Login',
      component: () => import('../views/Auth/LogIn.vue')
    },
    {
      path: '/Youth_Management_Dashboard',
      name: 'Youth_Dashboard',
      component: () => import('../views/Vendor/YouthDashborad.vue'),
      children: [
        {
          path: '/vendor_profile',
          name: 'vendor_profile',
          component: () => import('../views/Vendor/Profile/VendorProfile.vue')
        },
        // My Bids
        {
          path: '/vendor_accepted_bids',
          name: 'vendor_accepted_bids',
          component: () => import('../views/Vendor/MyBids/AcceptedBids.vue')
        },
        {
          path: '/vendor_pending_bids',
          name: 'Vendor Pending Bids',
          component: () => import('@/views/Vendor/MyBids/PendingBids.vue')
        },
        //My Services
        {
          path: '/vendor_add_transportService',
          name: 'vendor_add_transportService',
          component: () => import('../views/Vendor/MyServices/AddTransportService.vue')
        },
        {
          path: '/vendor_hotel_Service',
          name: 'vendor_hotel_Service',
          component: () => import('../views/Vendor/MyServices/HotelService.vue')
        },
        {
          path: '/ground_transport_service',
          name: 'Ground Transport Service',
          component: () => import('../views/Vendor/MyServices/GroundTransportService.vue')
        },
      ]
    },

    // finance dashboard start
    {
      path: '/Finance_Login',
      name: 'Finance Login',
      component: () => import('../views/Auth/LogIn.vue')
    },
    {
      path: '/Finance_Dashboard',
      name: 'Finance_Dashboard',
      component: () => import('../views/Finance/FinanceDashboard.vue'),
      children: [
        {
          path: '/Finance_Dashboard/Profile',
          name: 'Finance_Dashboard_Profile',
          component: () => import('../views/Finance/Profile/FinanceProfile.vue')
        },
        {
          path: '/Finance_Dashboard/Account_Ledger_List',
          name: 'Account_Ledger_List',
          component: () => import('../views/Finance/Accounts/FinanceAccountLedgeList.vue')
        },
        {
          path: '/Finance_Dashboard/Payroll_Create',
          name: 'Payroll_Create',
          component: () => import('../views/Finance/Accounts/FinancePayroll.vue')
        },
        {
          path: '/Finance_Dashboard/Project_Expense',
          name: 'Project_Expense',
          component: () => import('../views/Finance/Accounts/FinanceProjectExpense.vue')
        },
        {
          path: '/Finance_Dashboard/Operation_Expense',
          name: 'Operation_Expense',
          component: () => import('../views/Finance/Accounts/FinanceOperationExepense.vue')
        },
        {
          path: '/Finance_Dashboard/Donation_Create',
          name: 'Donation_Create',
          component: () => import('../views/Finance/Donation/FinanceDonationCreate.vue')
        },
        {
          path: '/Finance_Dashboard/Donation_List',
          name: 'Donation_List',
          component: () => import('../views/Finance/Donation/FinanceDonationList.vue')
        },
        {
          path: '/Finance_Dashboard/Donation_Broadcast',
          name: 'Donation_Broadcast',
          component: () => import('../views/Finance/Donation/FinanceDonationBroadcast.vue')
        },
        {
          path: '/Finance_Dashboard/Donation_Status',
          name: 'Donation_Status',
          component: () => import('../views/Finance/Donation/FinanceDonationStatus.vue')
        },
        {
          path: '/Finance_Dashboard/Fund_Create',
          name: 'Fund_Create',
          component: () => import('../views/Finance/Fund/FinanceFundCreate.vue')
        },
        {
          path: '/Finance_Dashboard/Fund_List',
          name: 'Fund_List',
          component: () => import('../views/Finance/Fund/FinanceFundList.vue')
        },
        {
          path: '/Finance_Dashboard/Fund_Broadcast',
          name: 'Fund_Broadcast',
          component: () => import('../views/Finance/Fund/FinanceFundBroadcast.vue')
        },
        {
          path: '/Finance_Dashboard/Fund_Status',
          name: 'Fund_Status',
          component: () => import('../views/Finance/Fund/FinanceFundStatus.vue')
        },
        {
          path: '/Finance_Dashboard/Fund_Appllied_List',
          name: 'Fund_Applied',
          component: () => import('../views/Finance/Fund/FinanceFundAppliedList.vue')
        }
      ]
    },
    // finance dashboard end

    {
      path: '/Education_Login',
      name: 'Learning Center Login',
      component: () => import('../views/Auth/LogIn.vue')
    },

    // supply chain
    {
      path: '/Supply_Chain_Management_Login',
      name: 'Supply Chain Management Login',
      component: () => import('../views/Auth/LogIn.vue')
    },
    {
      path: '/Supply_Chain_Management_Chain_Management_Dashboard',
      name: 'Supply_Dashboard',
      component: () => import('../views/Supply/SupplyDashbord.vue'),
      children: [
        {
          path: '/Supply_Admin_Profile',
          name: 'Supply_Admin_Profile',
          component: () => import('../views/Supply/Profile/SupplyProfile.vue')
        },
        {
          path: '/Supply_Create_Order',
          name: 'Supply_Create_Order',
          component: () => import('../views/Supply/OrderCreate.vue')
        },
        {
          path: '/Supply_Create_Bid',
          name: 'Supply_Create_Bid',
          component: () => import('../views/Supply/CreateBid.vue')
        },
        {
          path: '/Supply_Post_Bid',
          name: 'Supply_Post_Bid',
          component: () => import('../views/Supply/PostBid.vue')
        },
        {
          path: '/Supply_Bid_List',
          name: 'Supply_Bid_List',
          component: () => import('../views/Supply/BidList.vue')
        },
        {
          path: '/Supply_Select_Bid',
          name: 'Supply_Select_Bid',
          component: () => import('../views/Supply/SelectBid.vue')
        },
        {
          path: '/Supply_Completed_Bid',
          name: 'Supply_Completed_Bid',
          component: () => import('../views/Supply/CompletedBid.vue')
        },
        {
          path: '/Supply_Hire_Vendor',
          name: 'Supply_Hire_Vendor',
          component: () => import('../views/Supply/HireVendor.vue')
        },
        {
          path: '/Supply_Active_Vendor',
          name: 'Supply_Active_Vendor',
          component: () => import('../views/Supply/ActiveVendor.vue')
        },
        {
          path: '/Supply_Vendor_List',
          name: 'Supply_Vendor_List',
          component: () => import('../views/Supply/VendorList.vue')
        },
        {
          path: '/Supply_Prefered_Vendor_List',
          name: 'Supply_Prefered_Vendor_List',
          component: () => import('../views/Supply/PreferedVendorList.vue')
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
        }
      ]
    },

    // hr management

    {
      path: '/HR_Login',
      name: 'HR Login',
      component: () => import('../views/Auth/LogIn.vue')
    },
    {
      path: '/HR_Dashboard',
      name: 'HR_Dashboard',
      component: () => import('../views/Hr/HrDashbord.vue'),
      children: [
        {
          path: '/HR_Dashboard/Proile',
          name: 'HR_Dashboard_Proile',
          component: () => import('../views/Hr/Profile/HRProfile.vue')
        },
        //Hr Manage Organogarn
        {
          path: '/HR_Dashboard/HR_Define_Position',
          name: 'HR_Define_Position',
          component: () => import('../views/Hr/ManageOrganogram/DefinePosition.vue')
        },
        {
          path: '/HR_Dashboard/HR_Position_List',
          name: 'HR_Position_List',
          component: () => import('../views/Hr/ManageOrganogram/PositionList.vue')
        },
        {
          path: '/HR_Dashboard/HR_Position_List/1',
          name: 'HR_Position_List-edit',
          component: () => import('../views/Hr/ManageOrganogram/EditDefinePosition.vue')
        },

        //Hr managemant

        {
          path: '/HR_Dashboard/HR_Employment_Scheduling',
          name: 'HR_Employment_Scheduling',
          component: () => import('../views/Hr/EmploymentScheduling.vue')
        },
        //Hr Job Creation
        {
          path: '/HR_Dashboard/HR_Create_Job_Description',
          name: 'HR_Create_Job_Description',
          component: () => import('../views/Hr/JobManagement/CreateJob.vue')
        },
        {
          path: '/HR_Dashboard/HR_Edit_Job_Description/1',
          name: 'HR_Edit_Job_Description',
          component: () => import('../views/Hr/JobManagement/EditJob.vue')
        },
        {
          path: '/HR_Dashboard/HR_Job_list',
          name: 'HR_Job_list',
          component: () => import('../views/Hr/JobManagement/JobList.vue')
        },

        {
          path: '/HR_Dashboard/HR_Post_List',
          name: 'HR_Post_List',
          component: () => import('../views/Hr/JobManagement/PostJob.vue')
        },
        //Hr hiring management
        {
          path: '/HR_Dashboard/HR_Higiring_Application',
          name: 'HR_Higiring_Application',
          component: () => import('../views/Hr/HigiringManagement/ApplicationSteps.vue')
        },
        {
          path: '/HR_Dashboard/HR_Change_Application_Steps/1',
          name: 'HR_Change_Application_Steps',
          component: () => import('../views/Hr/HigiringManagement/ChangeApplicationSteps.vue')
        },
        {
          path: '/HR_Dashboard/HR_Higiring_Background_Check',
          name: '/HR_Higiring_Background_Check',
          component: () => import('../views/Hr/HigiringManagement/BackgroundCheck.vue')
        },

        {
          path: '/HR_Dashboard/HR_Higiring_Orientation',
          name: '/HR_Higiring_Orientation',
          component: () => import('../views/Hr/HigiringManagement/Orientation.vue')
        },

        {
          path: '/HR_Dashboard/HR_Employee_list',
          name: '/HR_Employee_list',
          component: () => import('../views/Hr/EmployeeManagement/EmployeeList.vue')
        },
        {
          path: '/HR_dashboard/HR_time_card',
          name: '/HR_Dashboard/HR_Time_Card',
          component: () => import('../views/Hr/EmployeeManagement/TimeCard .vue')
        },

        {
          path: '/HR_dashboard/HR_leave_management',
          name: '/HR_Dashboard/HR_Leave_Management',
          component: () => import('../views/Hr/EmployeeManagement/LeaveManagement.vue')
        },

        {
          path: '/HR_Dashboard/HR_Performance_Management',
          name: '/HR_Dashboard/HR_Performance_Management',
          component: () => import('../views/Hr/EmployeeManagement/PerformanceManagement.vue')
        },

        {
          path: '/HR_Dashboard/HR_Career_Life_Cycle',
          name: '/HR_Dashboard/HR_Career_Life_Cycle',
          component: () => import('../views/Hr/EmployeeManagement/CareerLifeCycle.vue')
        }
      ]
    },

    //Learning Management System LMS
    {
      path: '/LMS_Login',
      name: 'LMS Login',
      component: () => import('@/views/Auth/LogIn.vue')
    },
   
    //Operation Dashboard
    {
      path: '/Operation_Login',
      name: 'Operation Login',
      component: () => import('../views/Auth/LogIn.vue')
    },
    {
      path: '/Opration_Dashboard',
      name: 'Operation_Dashboard',
      component: () => import('../views/Operation/OprationDashbord.vue'),
      children: [
        {
          path: '/Opration_Management_profile',
          name: 'Opration_Management_profile',
          component: () => import('../views/Operation/Profile/OperationProfile.vue')
        },
        {
          path: '/Opration_Meeting_Create',
          name: 'Opration_Meeting_Create',
          component: () => import('../views/Operation/MeetingManagement/CreateMeeting.vue')
        },
        {
          path: '/Opration_Meeting_Create_meeting',
          name: 'Opration_Meeting_Create_meeting',
          component: () => import('../views/Operation/MeetingManagement/CreateMeeting.vue')
        },
        {
          path: '/Opration_Meeting_meeting_list',
          name: 'Opration_Meeting_meeting_list',
          component: () => import('../views/Operation/MeetingManagement/MeetingList.vue')
        },
        // {
        //   path: '/Opration_Meeting_meeting_list',
        //   name: 'Opration_Meeting_meeting_list',
        //   component: () => import('../views/Operation/MeetingManagement/MeetingList.vue'),
        // },
        {
          path: '/Opration_Meeting_Post_Meeting',
          name: 'Opration_Meeting_Post_Meeting',
          component: () => import('../views/Operation/MeetingManagement/PostMeeting.vue')
        },
   
        {
          path: '/operation_announcement_create_announcement',
          name: 'operation_announcement_create_announcement',
          component: () =>
            import('../views/Operation/AnnouncementManagement/CreateAnnouncement.vue')
        },
        {
          path: '/operation_announcement_announcement_list',
          name: 'operation_announcement_announcement_list',
          component: () => import('../views/Operation/AnnouncementManagement/AnnouncementList.vue')
        },
        {
          path: '/operation_announcement_broadcast_announcement',
          name: 'operation_announcement_broadcast_announcement',
          component: () =>
            import('@/views/Operation/AnnouncementManagement/BroadcastAnnouncement.vue')
        },

        //Prayer Announecment
    

        //Recent Prayer Service
        {
          path: '/operation_maintenance_create_maintenance',
          name: 'Operation_Maintenance_Create_Maintenance',
          component: () =>
            import('../views/Operation/MaintenanceManagement/CreateMaintenanceWork.vue')
        },
        {
          path: '/operation_maintenance_work_list',
          name: 'Operation_Maintenance_Work_List',
          component: () =>
            import('../views/Operation/MaintenanceManagement/MaintenanceWorkList.vue')
        },
        {
          path: '/operation_maintenance_post_work',
          name: 'Operation_Maintenance_Post_Work',
          component: () =>
            import('../views/Operation/MaintenanceManagement/PostMaintenanceWork.vue')
        },
        {
          path: '/operation_maintenance_work_status',
          name: 'Operation_Maintenance_Work_Status',
          component: () =>
            import('../views/Operation/MaintenanceManagement/MaintenanceWorkStatus.vue')
        }
      ]
    },

    // media management
    {
      path: '/Media_Login',
      name: 'Media Login',
      component: () => import('../views/Auth/LogIn.vue')
    },
    {
      path: '/Media_And_Com_Dashboard',
      name: 'Media_And_Com_Dashboard',
      component: () => import('../views/MediaAndCom/MediaAndComDashboard.vue'),
      children: [
        {
          path: '/Media_And_Com_Profile',
          name: 'Media_And_Com_Profile',
          component: () => import('../views/MediaAndCom/Profile/MediaAndComProfile.vue')
        },
        {
          path: '/media_and_com_khudba_create_khudba',
          name: 'Media_And_Com_Khudba_Create_Khudba',
          component: () => import('@/views/MediaAndCom/Khudba/CreateKhudba.vue')
        },
        {
          path: '/media_and_com_khudba_khudba_list',
          name: 'Media_And_Com_Khudba_Khudba_List',
          component: () => import('@/views/MediaAndCom/Khudba/KhudbaList.vue')
        },
        {
          path: '/media_and_com_khudba_khudba_broadcast',
          name: 'Media_And_Com_Khudba_Khudba_Broadcast',
          component: () => import('@/views/MediaAndCom/Khudba/KhudbaBroadcast.vue')
        },
        {
          path: '/media_and_com_khatira_create',
          name: 'Media_And_Com_Khatira_Create',
          component: () => import('@/views/MediaAndCom/Khatira/CreateKhatira.vue')
        },
        {
          path: '/media_and_com_khatira_list',
          name: 'Media_And_Com_Khatira_List',
          component: () => import('@/views/MediaAndCom/Khatira/KhatiraList.vue')
        },
        {
          path: '/media_and_com_khatira_broadcast_khatira',
          name: 'Media_And_Com_Khatira_Broadcast_Khatira',
          component: () => import('@/views/MediaAndCom/Khatira/BroadcastKhatira.vue')
        },
        {
          path: '/media_and_com_post_publications',
          name: 'Media_And_Com_Post_Publications',
          component: () => import('@/views/MediaAndCom/Publications/PostPublication.vue')
        },
        {
          path: '/media_and_com_publications_list',
          name: 'Media_And_Com_Publications_List',
          component: () => import('@/views/MediaAndCom/Publications/PublicationList.vue')
        },
        {
          path: '/media_and_com_publications_broadcast',
          name: 'Media_And_Com_Publications_Broadcast',
          component: () => import('@/views/MediaAndCom/Publications/PublicationBroadcast.vue')
        },
        {
          path: '/media_and_com_pons_post_category',
          name: 'media_and_com_pons_post_category',
          component: () => import('@/views/MediaAndCom/Gallery/PostCategory.vue')
        },
        {
          path: '/media_and_com_pons_category_list',
          name: 'media_and_com_pons_category_list',
          component: () => import('@/views/MediaAndCom/Gallery/CategoryList.vue')
        },
        {
          path: '/media_and_com_pons_post_image',
          name: 'Media_And_Com_Pons_Post_Image',
          component: () => import('@/views/MediaAndCom/Gallery/PostImage.vue')
        },
        {
          path: '/media_and_com_pons_image_list',
          name: 'Media_And_Com_Pons_Image_List',
          component: () => import('@/views/MediaAndCom/Gallery/ImageList.vue')
        },
        {
          path: '/media_and_com_pons_image_broadcast',
          name: 'Media_And_Com_Pons_Image_Broadcast',
          component: () => import('@/views/MediaAndCom/Gallery/ImageBroadcast.vue')
        },
        {
          path: '/media_and_com_pons_post_banner',
          name: 'Media_And_Com_Pons_Post_Banner',
          component: () => import('@/views/MediaAndCom/Banner/PostBanner.vue')
        },
        {
          path: '/media_and_com_pons_banner_list',
          name: 'Media_And_Com_Pons_Banner_List',
          component: () => import('@/views/MediaAndCom/Banner/BannerList.vue')
        },
        {
          path: '/media_and_com_pons_banner_broadcast',
          name: 'Media_And_Com_Pons_Banner_Broadcast',
          component: () => import('@/views/MediaAndCom/Banner/BannerBroadcast.vue')
        },
        {
          path: '/media_and_com_pons_post_promotion',
          name: 'Media_And_Com_Pons_Post_promotion',
          component: () => import('@/views/MediaAndCom/Promotion/PostPromotion.vue')
        },
        {
          path: '/media_and_com_pons_promotion_list',
          name: 'Media_And_Com_Pons_promotion_List',
          component: () => import('@/views/MediaAndCom/Promotion/PromotionList.vue')
        },
        {
          path: '/media_and_com_pons_promotion_broadcast',
          name: 'Media_And_Com_Pons_promotion_Broadcast',
          component: () => import('@/views/MediaAndCom/Promotion/PromotionBroadcast.vue')
        }
      ]
    },

    // member dashboard
    {
      path: '/employees/employeeLogin',
      name: 'Employee Login',
      component: () => import('../views/website/Employees/EmployeeLogin.vue')
    },
    {
      path: '/Member_Login',
      name: 'Customer Login',
      component: () => import('../views/Auth/LogIn.vue')
    },

    {
      path: '/Membar_Dashboard',
      name: 'Membar_Dashboard',
      component: () => import('../views/Member/MembarDashbord.vue'),
      children: [
        {
          path: '/Member_Profile',
          name: 'Member_Profile',
          component: () => import('../views/Member/Profile/MembarProfile.vue')
        },
        {
          path: '/member_package_list',
          name: 'Membar_Package_List',
          component: () => import('../views/Member/Profile/PackageList.vue'),
        },
        {
          path: '/Membar_Event_History',
          name: 'Membar_Event_History',
          component: () => import('../views/Member/MemberEventHistory.vue')
        },

        {
          path: '/Membar_Payment_History',
          name: 'Membar_Payment_History',
          component: () => import('../views/Member/MemberPayment.vue')
        },
        {
          path: '/member_rewards',
          name: 'Member_Rewards',
          component: () => import('@/views/Member/MemberRewards.vue')
        },

        {
          path: '/Select_Volunteer',
          name: 'Select Volunteer',
          component: () => import('../views/Member/Volunteer/MemberVolunteerSelect.vue')
        },
        {
          path: '/My_Volunteer',
          name: 'My Volunteer',
          component: () => import('../views/Member/Volunteer/MyVolunteerEvent.vue')
        },
        {
          path: '/Volunteer_Complete_List',
          name: 'Volunteer Complete List',
          component: () => import('../views/Member/Volunteer/VolunteerCompleteList.vue')
        },

        // imam
        {
          path: '/Select_Imam',
          name: 'Select Imam',
          component: () => import('../views/Member/MemberImamSelect.vue')
        },
        {
          path: '/Imam_Appointment',
          name: 'Imam_Appointment',
          component: () => import('../views/Member/MemberAppointmentImam.vue')
        },
        {
          path: '/Scholar_Appointment',
          name: 'Scholar_Appointment',
          component: () => import('../views/Member/MemberAppointmentScholar.vue')
        },



       
      ]
    },


    // {
    //   path: '/management-login',
    //   name: 'ManagementLoginPage',
    //   component: () => import('../auth/ManagementLoginPage.vue'),
    //   meta: { layout: AuthLayout, notAuthenticated: true }
    // },
    // {
    //   path: '/student-login',
    //   name: 'LoginPage',
    //   component: () => import('../auth/LoginPage.vue'),
    //   meta: { layout: AuthLayout, notAuthenticated: true }
    // },
    // {
    //   path: '/teacher-login',
    //   name: 'TeacherLoginPage',
    //   component: () => import('../auth/TeacherLoginPage.vue'),
    //   meta: { layout: AuthLayout, notAuthenticated: true }
    // },
    // {
    //   path: '/forgot-pass',
    //   name: 'forgotPasswordPage',
    //   component: () => import('../auth/ForgotPasswordComponent.vue'),
    //   meta: { layout: AuthLayout, notAuthenticated: true }
    // },

    // {
    //   path: '/registration',
    //   name: 'RegistrationPage',
    //   component: () => import('../auth/RegistrationPage.vue'),
    //   meta: { layout: AuthLayout, notAuthenticated: true }
    // },

    {
      path: '/teacher/login',
      name: 'Teacher Login',
      component: () => import('../views/Auth/LogIn.vue')
    },

    {
      path: '/reg-teacher',
      name: 'TeacherRegistrationPage',
      component: () => import('../auth/RegistrationPageTeacher.vue'),
      meta: { notAuthenticated: true }
    },
    {
      path: '/management-registration',
      name: 'ManagementRegistrationPage',
      component: () => import('../auth/ManagementRegistrationPage.vue'),
      meta: { notAuthenticated: true }
    },

  ]
})

export default router
