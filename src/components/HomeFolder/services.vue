<template>
  <section class="bg-slate-100 w-full my-8 py-5 px-[5%]">
    <!-- Service Section Header -->
    <h2 class="text-3xl font-bold pb-16 uppercase">Services</h2>
    <!-- Responsive Card Layout -->
    <div class="grid grid-cols-4 gap-x-5 gap-y-16">
      <!-- Loop through service items to generate cards -->
      <router-link to="/management-login">
        <div
          class="bg-white rounded-2xl bg-[url('/src/assets/image/commitees/8.png')] w-full bg-top bg-cover bg-origin-contentshadow-2xl border border-white h-full flex flex-col items-center uppercase text-center relative"
        >
          <div
            class="h-full rounded-2xl flex flex-col items-center bg-[#0000007c] w-full px-5 py-14"
          >
            <img
              src="/src/assets/image/home/s1.png"
              alt="logo 1"
              class="mb-4 absolute top-[-25%] p-4 rounded-full bg-white"
            />
            <!-- <div class="mb-4 absolute top-[-25%] p-4 rounded-full bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                id="study"
                width="48"
                height="48"
                fill="[#23646dc6]"
              >
                <path
                  d="m31.52707,25.19185c1.48364.00171,2.93481-.87732,3.63672-2.18115.60254-1.1687-1.11938-2.09473-1.76172-.94824-.70044,1.37238-2.78442,1.49939-3.64551.22693-.7616-1.06091-2.38403.09125-1.62891,1.16034.7666,1.07562,2.08008,1.74213,3.39941,1.74213Z"
                ></path>
                <path
                  d="m52.46371,29.57039c-.35693-.52112-.8689-.927-1.48523-1.13892-2.62378-1.85522-5.83899-3.29114-9.40198-4.21973,2.05786-1.72504,2.59875-4.55353,1.40247-6.84808,1.07593-2.6601,1.46277-5.18774,1.13208-7.51703-.66492-6.14136-7.46802-10.24536-12.43164-6.30762-6.13892-.55988-14.80542.43762-12.25085,8.75873.40833,1.50806.99402,3.1759.69714,4.56549-.04285.20813-.00085.40668.07715.58813-1.19604,2.36334-.50879,5.22858,1.62085,6.9212-3.33105.93097-6.34027,2.31134-8.80554,4.05963-.62329.21503-1.14008.62836-1.49701,1.15887-6.96265,5.69946-7.22943,14.45203-.52142,20.38007v4.16699c-.03455,1.68158,1.50916,3.12292,3.18512,2.98016-.47632,1.58911.0058,3.49451,1.17914,4.60968.31342.3042.78662.36798,1.16699.16406,4.91663-2.69073,10.47192-2.64276,15.46851-.61859,5.00342-2.03198,10.56067-2.06586,15.46899.61871.38037.2038.85364.14001,1.16699-.16418,1.17261-1.11505,1.65625-3.02057,1.1792-4.6095,1.68066.14685,3.21704-1.30066,3.18506-2.98041,0,.00006,0-4.16693,0-4.16693,6.71497-5.93793,6.43994-14.69189-.53601-20.40076ZM10.99973,47.11843c-3.83539-4.32806-3.84106-9.89819,0-14.21869v14.21869ZM24.78403,5.8882c2.39148-.54156,4.58386-.63629,7.10535-.30914.31055.03857.62305-.06689.8418-.29053,1.41113-1.43506,3.95215-1.70361,5.9082-.625,3.19751,1.74622,4.23962,6.20105,3.20117,9.78723-.38623-3.85138-3.28174-7.0954-7.33813-6.33649-2.52686.65051-5.02271-.08917-7.54858-.06873-2.54932.25458-4.80298,2.38837-5.25208,4.96161-1.34277-3.92731-.9447-6.38898,3.08228-7.11896Zm-3.17102,14.11029c.00195-.69385.18652-1.37695.5332-1.9751.87109-1.49805,1.24707-3.20801,1.53125-4.69287.31226-1.70496,1.8158-3.13184,3.49121-3.29639,2.57458.13763,5.13232.66949,7.70703.04468,1.82629-.37079,3.71338.69928,4.43457,2.46411.53271,1.69434.66284,3.47876,1.62939,5.19678,1.61328,2.46948.06445,5.10828-2.38245,6.104-1.42371.50977-3.06824,1.18213-4.47058,2.30078-1.41797,1.13379-3.53027,1.13135-4.94824.00049-2.54663-2.24213-7.22632-2.1283-7.52539-6.14648Zm8.38672,8.77277c1.29932.39655,2.77319.28174,4-.27814.38135,3.14227-4.07629,3.42444-4,.27814Zm-17,11.25458c.63086,0,1.01758.02734,1.31543.2627.43988.32269.67859,1.04596.20209,1.34277-1.12628.94507-.84424,2.19263.16028,3.02533,1.00574,1.15131-.47314,2.37659-1.6778,2.3526v-6.9834Zm3.34375,19.71875c-.45996-.80731-.45032-1.92389.00903-2.724,2.6178-.04144,5.24756.23969,7.68445.79865-2.62244.10938-5.23718.74359-7.69348,1.92535Zm14.65625-1.50781c-3.8125-2.06641-8.8916-3.22852-14.05957-3.22852-.94983.00732-1.90045.03937-2.84766.11914-.29199.02246-.56348-.06836-.77441-.2627-.20508-.18848-.31836-.44629-.31836-.72656v-5.12927c3.24084.00232,5.42908-3.56824,2.91504-5.9469,2.26147-2.16571-.20667-5.40009-2.91504-5.03491v-6.7561c-.02893-.51965.56244-.69098.89484-1.00299,6.22467-1.07886,12.8869,1.30896,17.10516,6.11334v21.85547Zm-13.33032-30.20551c1.99512-.94788,4.21802-1.69275,6.58728-2.20587,1.2489.44641,2.61646,1.06561,3.74304,1.95587-.0752,1.43256.04395,3.02576,1.17297,4.05603,2.41467,2.52112,6.89624.66479,6.82703-2.82721,0,.00012,0-1.76257,0-1.76257,1.03296-.67157,2.19104-1.14807,3.23242-1.521,2.56714.50995,4.96008,1.28888,7.09863,2.30511-5.34827.21021-10.60376,2.54901-14.33105,6.48749-3.72778-3.93787-8.98474-6.2774-14.33032-6.48785Zm29.98657,31.71332c-2.45422-1.18195-5.06714-1.81635-7.68799-1.92639,2.43579-.55823,5.06372-.83899,7.67896-.79767.45935.80017.46899,1.91675.00903,2.72406Zm1.82617-18.11328c-.47632-.29675-.23779-1.02014.20215-1.34277.29785-.23535.68457-.2627,1.31348-.2627.00195,0,.00195,6.9834.00195,6.9834-1.20667.02283-2.6825-1.20093-1.67773-2.35364,1.00891-.84662,1.28955-2.06451.16016-3.02429Zm1.51758-3.60413c-2.70874-.36322-5.17651,2.86798-2.91504,5.03479-2.51465,2.37689-.32446,5.95135,2.91504,5.9469v5.12927c0,.28027-.11328.53809-.31836.72656-.724.55377-1.77808.08246-2.62427.17029-5.50366-.16046-11.00049,1.00214-15.05737,3.20178v-21.85547c4.21948-4.8067,10.88623-7.19519,17.11035-6.11255.33838.30414.91797.47803.88965,1.00214v6.75629Zm2,9.09125v-14.21887c3.8407,4.32361,3.83569,9.88971,0,14.21887Z"
                ></path>
                <path
                  d="M45.99973 17.01021c.55273 0 1-.44775 1-1-.02563-1.26514 1.24487-2.26703 2.48242-1.94482 1.84912.41248 1.96509 2.96149.48145 3.69824-1.22949.67773-1.96387 1.85889-1.96387 3.15967-.04248.58179.41138 1.04755 1 1.04346.55273 0 1-.49121 1-1.04346 0-.56104.34766-1.08789.92871-1.4082 1.58105-.87061 2.37109-2.65137 1.9668-4.43115-.55225-2.80005-4.24121-4.03082-6.38965-2.20105-1.06934.70038-2.54919 3.87286-.50586 4.12732zM48.99973 25.01021c1.31372-.02545 1.31348-1.9751 0-2-1.3136.02509-1.31348 1.97473 0 2zM10.99973 7.01021c.55273 0 1-.44775 1-1-.02557-1.26489 1.24493-2.26758 2.48242-1.94482 1.84912.41248 1.96509 2.96149.48138 3.69824-1.22943.67773-1.96381 1.85889-1.96381 3.15967-.04248.58179.41138 1.04755 1 1.04346.55273 0 1-.49121 1-1.04346 0-.56104.34766-1.08789.92871-1.4082 1.58105-.87061 2.37109-2.65137 1.9668-4.43115-.55298-2.8006-4.23938-4.02948-6.38971-2.20105-1.06934.70038-2.54913 3.87286-.5058 4.12732zM13.99979 15.01021c1.3136-.02545 1.31335-1.9751-.00006-2-1.3136.02509-1.31348 1.97473.00006 2zM35.8291 42.85156c-.79445.02005-1.29461-.96053-.80563-1.59132 1.50876-2.05663 3.50192-3.66991 5.76559-4.66503 1.33224-.58105 2.76023-.97145 4.23047-1.10597 1.24012-.00287 1.34435 1.85834.11127 1.99415-3.20603.11974-7.23223 2.88508-8.49396 4.95967-.18762.25566-.48938.40849-.80774.40849zM35.8291 50.85156c-.79445.02005-1.29461-.96053-.80563-1.59132 1.50876-2.05663 3.50192-3.66991 5.76559-4.66503 1.3318-.58054 2.7587-.97162 4.22851-1.10548 1.24188-.00365 1.34709 1.85717.11322 1.99367-3.20603.11974-7.23223 2.88508-8.49396 4.95967-.18762.25566-.48938.40849-.80774.40849zM28.63867 42.85156c-.31836 0-.62012-.15283-.80762-.40869-1.26295-2.07535-5.28756-4.8387-8.49425-4.95927-1.22814-.13358-1.13293-1.99876.1115-1.99434 1.46956.13414 2.89786.52488 4.23041 1.10594 2.26367.99513 4.25683 2.60841 5.76562 4.66554.48734.62915-.00965 1.61222-.80566 1.59082zM28.63867 50.85156c-.31836 0-.62012-.15283-.80762-.40869-1.26295-2.07535-5.28756-4.8387-8.49425-4.95927-1.22893-.13426-1.13274-1.99906.11345-1.99385 1.46849.13312 2.89607.52487 4.22846 1.10545 2.26367.99513 4.25683 2.60841 5.76562 4.66554.48734.62915-.00965 1.61222-.80566 1.59082z"
                ></path>
              </svg>
            </div> -->
            <h2 class="font-bold mb-2 text-white">Education Service</h2>
          </div>
        </div>
      </router-link>

      <router-link to="/services/social">
        <div
          class="bg-white rounded-2xl bg-[url('/src/assets/image/commitees/0.png')] w-full bg-top bg-cover bg-origin-contentshadow-2xl border border-white h-full flex flex-col items-center uppercase text-center relative"
        >
          <div
            class="h-full rounded-2xl flex flex-col items-center bg-[#0000007c] w-full px-5 py-14"
          >
            <img
              src="/src/assets/image/home/s2.png"
              alt="logo 1"
              class="mb-4 absolute top-[-25%] p-4 rounded-full bg-white"
            />
            <h2 class="font-bold mb-2 text-white">Social Services</h2>
          </div>
        </div>
      </router-link>

      <router-link to="/services/new_muslim">
        <div
          class="bg-white rounded-2xl bg-[url('/src/assets/image/home/e3.png')] w-full bg-top bg-cover bg-origin-contentshadow-2xl border border-white h-full flex flex-col items-center uppercase text-center relative"
        >
          <div
            class="h-full rounded-2xl flex flex-col items-center bg-[#0000007c] w-full px-5 py-14"
          >
            <img
              src="/src/assets/image/home/s3.png"
              alt="logo 1"
              class="mb-4 absolute top-[-25%] p-4 rounded-full bg-white"
            />
            <h2 class="font-bold mb-2 text-white">New Muslim Services</h2>
          </div>
        </div>
      </router-link>

      <router-link to="/services/special_needs">
        <div
          class="bg-white rounded-2xl bg-[url('/src/assets/image/home/l5.png')] w-full bg-top bg-cover bg-origin-contentshadow-2xl border border-white h-full flex flex-col items-center uppercase text-center relative"
        >
          <div
            class="h-full rounded-2xl flex flex-col items-center bg-[#0000007c] w-full px-5 py-14"
          >
            <img
              src="/src/assets/image/home/s4.png"
              alt="logo 1"
              class="mb-4 absolute top-[-25%] p-4 rounded-full bg-white"
            />
            <h2 class="font-bold mb-2 text-white">Special Needs Services</h2>
          </div>
        </div>
      </router-link>

      <router-link class="view-all" to="/services/nikah">
        <div
          class="bg-white rounded-2xl bg-[url('/src/assets/image/home/w.jpg')] w-full bg-top bg-cover bg-origin-contentshadow-2xl border border-white h-full flex flex-col items-center uppercase text-center relative"
        >
          <div
            class="h-full rounded-2xl flex flex-col items-center bg-[#0000007c] w-full px-5 py-14"
          >
            <img
              src="/src/assets/image/home/s5.png"
              alt="logo 1"
              class="mb-4 absolute top-[-25%] p-4 rounded-full bg-white"
            />
            <h2 class="font-bold mb-2 text-white">Nikah Services</h2>
          </div>
        </div>
      </router-link>

      <router-link to="/services/funeral">
        <div
          class="bg-white rounded-2xl bg-[url('/src/assets/image/home/f.png')] w-full bg-top bg-cover bg-origin-contentshadow-2xl border border-white h-full flex flex-col items-center uppercase text-center relative"
        >
          <div
            class="h-full rounded-2xl flex flex-col items-center bg-[#0000007c] w-full px-5 py-14"
          >
            <img
              src="/src/assets/image/home/s6.png"
              alt="logo 1"
              class="mb-4 absolute top-[-25%] p-4 rounded-full bg-white"
            />
            <h2 class="font-bold mb-2 text-white">Funeral Service</h2>
          </div>
        </div>
      </router-link>

      <router-link to="/services/matrimony">
        <div
          class="bg-white rounded-2xl bg-[url('/src/assets/image/donation/d3.jpg')] w-full bg-top bg-cover bg-origin-contentshadow-2xl border border-white h-full flex flex-col items-center uppercase text-center relative"
        >
          <div
            class="h-full rounded-2xl flex flex-col items-center bg-[#0000007c] w-full px-5 py-14"
          >
            <img
              src="/src/assets/image/home/s7.png"
              alt="logo 1"
              class="mb-4 absolute top-[-25%] p-4 rounded-full bg-white"
            />
            <h2 class="font-bold mb-2 text-white">Matrimony Services</h2>
          </div>
        </div>
      </router-link>

      <router-link to="/services/facilities">
        <div
          class="bg-white rounded-2xl bg-[url('/src/assets/image/commitees/6.png')] w-full bg-top bg-cover bg-origin-contentshadow-2xl border border-white h-full flex flex-col items-center uppercase text-center relative"
        >
          <div
            class="h-full rounded-2xl flex flex-col items-center bg-[#0000004f] w-full px-5 py-14"
          >
            <img
              src="/src/assets/image/home/s8.png"
              alt="logo 1"
              class="mb-4 absolute top-[-25%] p-4 rounded-full bg-white"
            />
            <h2 class="font-bold mb-2 text-white">Facilities Services</h2>
          </div>
        </div>
      </router-link>
    </div>
  </section>
</template>
<script setup></script>
