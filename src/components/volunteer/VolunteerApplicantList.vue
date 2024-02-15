<script setup>
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '/components/ui/select'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '/components/ui/dialog'
</script>

<template>
  <div class="px-5 bg-slate-50 py-5 w-3/4">
    <p class="text-2xl font-bold py-3 border-b">Volunteer Applicant List</p>
    <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
      <div class="flex justify-between items-center pt-4 pb-2">
        <p class="text-2xl text-yellow-600 font-bold">All Volunteer Application</p>

        <input
          type="text"
          placeholder="Search by job name"
          class="py-1.5 px-2 rounded-md border text-sm"
        />
        <input
          type="text"
          placeholder="Search by interest area"
          class="py-1.5 px-2 rounded-md border text-sm"
        />

        <div class="w-[200px]">
          <Select class="">
            <SelectTrigger class="w-full">
              <SelectValue placeholder="Search by expertise" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Expert"> Expert </SelectItem>
                <SelectItem value="Intermediate"> Intermediate </SelectItem>
                <SelectItem value="Beginner"> Beginner </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <hr />
      <div
        class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
      >
        <table class="table-auto w-full">
          <thead>
            <tr class="bg-white">
              <th class="p-2 text-center">No.</th>
              <th class="p-2 text-center">Name</th>
              <th class="">Volunteer Job</th>
              <th class="">Expertise Area</th>
              <th class="p-2 text-center">Additional Interest Area</th>
              <th class="p-2 text-center">More Info</th>
              <th class="p-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="">
              <td class="py-4 p-2 text-center">01</td>
              <td class="py-4 p-2 text-center">Md. Rocky</td>
              <td class="py-4 p-2 text-center">Environmental Cleanup Volunteer</td>
              <td class="py-4 p-2 text-center">Software Engineer</td>
              <td class="py-4 p-2 text-center">
                Coding(Expert), Graphic Design(Intermediate), Gardening(Beginner)
              </td>
              <td class="py-4 p-2">
                <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                  <Dialog>
                    <DialogTrigger> Details </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>
                          <div class="font-bold text-xl mb-2">Sound System</div>
                        </DialogTitle>
                        <DialogDescription>
                          <img src="/src/assets/image/home/l4.jpg" alt="" />
                          <div>
                            <h1 class="font-semibold mt-2 text-lg text-black">Description</h1>
                            In our noble mission, we strive to alleviate hunger and nourish the
                            vulnerable in our community. Committed to the values of compassion and
                            social responsibility, we dedicate ourselves to feeding those in need.
                            Every day, we work tirelessly to provide nutritious meals, ensuring that
                            no one goes to bed hungry. Our initiative goes beyond immediate relief,
                            aiming to empower individuals and build sustainable solutions for
                            long-term food security. With the support of our dedicated team and
                            generous community, we envision a future where hunger is eradicated,
                            fostering a world where every person has access to the fundamental right
                            of wholesome sustenance and the hope for a brighter tomorrow
                          </div>
                          <div class="flex gap-5 items-center justify-between">
                            <div class="flex gap-2">
                              <h1 class="text-black font-semibold">Project Budget:</h1>
                              $ 5000
                            </div>
                            <div class="flex gap-2">
                              <h1 class="text-black font-semibold">Completion Timeframe:</h1>
                              6 months
                            </div>
                          </div>
                          <div class="flex gap-5 items-center justify-between mt-2">
                            <div>
                              <span class="text-black font-semibold">Starting Date:</span> 1 Jan
                              2024
                            </div>
                            <div>
                              <span class="text-black font-semibold">Ending Date:</span> 10 Feb 2024
                            </div>
                          </div>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </button>
              </td>
              <td class="py-4 p-2 text-center">
                <Select class="">
                  <SelectTrigger class="w-full">
                    <SelectValue placeholder="Select one" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select</SelectLabel>
                      <SelectItem value="Comfort The Sick"> Approved </SelectItem>
                      <SelectItem value="Educate The Children"> Waiting </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </td>
            </tr>

            <tr class="bg-white">
              <td class="py-4 p-2 text-center">02</td>
              <td class="py-4 p-2 text-center">Md. Mack</td>
              <td class="py-4 p-2 text-center">Tutoring Volunteer</td>
              <td class="py-4 p-2 text-center">Graphics Designer</td>
              <td class="py-4 p-2 text-center">Coding(Expert), Gardening(Beginner)</td>
              <td class="py-4 p-2">
                <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                  <Dialog>
                    <DialogTrigger> Details </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>
                          <div class="font-bold text-xl mb-2">Sound System</div>
                        </DialogTitle>
                        <DialogDescription>
                          <img src="/src/assets/image/home/l4.jpg" alt="" />
                          <div>
                            <h1 class="font-semibold mt-2 text-lg text-black">Description</h1>
                            In our noble mission, we strive to alleviate hunger and nourish the
                            vulnerable in our community. Committed to the values of compassion and
                            social responsibility, we dedicate ourselves to feeding those in need.
                            Every day, we work tirelessly to provide nutritious meals, ensuring that
                            no one goes to bed hungry. Our initiative goes beyond immediate relief,
                            aiming to empower individuals and build sustainable solutions for
                            long-term food security. With the support of our dedicated team and
                            generous community, we envision a future where hunger is eradicated,
                            fostering a world where every person has access to the fundamental right
                            of wholesome sustenance and the hope for a brighter tomorrow
                          </div>
                          <div class="flex gap-5 items-center justify-between">
                            <div class="flex gap-2">
                              <h1 class="text-black font-semibold">Project Budget:</h1>
                              $ 5000
                            </div>
                            <div class="flex gap-2">
                              <h1 class="text-black font-semibold">Completion Timeframe:</h1>
                              6 months
                            </div>
                          </div>
                          <div class="flex gap-5 items-center justify-between mt-2">
                            <div>
                              <span class="text-black font-semibold">Starting Date:</span> 1 Jan
                              2024
                            </div>
                            <div>
                              <span class="text-black font-semibold">Ending Date:</span> 10 Feb 2024
                            </div>
                          </div>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </button>
              </td>
              <td class="py-4 p-2 text-center">
                <Select class="">
                  <SelectTrigger class="w-full">
                    <SelectValue placeholder="Select one" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select</SelectLabel>
                      <SelectItem value="Comfort The Sick"> Approved </SelectItem>
                      <SelectItem value="Educate The Children"> Waiting </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
