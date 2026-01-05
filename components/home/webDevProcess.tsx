"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabData = [
  { value: "uiux", label: "UI/UX Designer" },
  { value: "frontend", label: "Front End Technologies" },
  { value: "backend", label: "Backend Technologies" },
  { value: "frameworks", label: "Frame Works" },
  { value: "marketing", label: "Digital Marketing" },
];

const TabContent = () => (
  <div className="p-4">
    {[1, 2, 3, 4].map((item) => (
      <div
        key={item}
        className="h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400"
      >
        Logo/Content
      </div>
    ))}
  </div>
);

export default function WebsitesTabs() {
  return (
    <section className="w-full py-12 container">
      <div>
        <h3 className="italic font-bold text-2xl">
          Experience a Seamless Website Development Process
        </h3>
        <h2 className="font-bold text-3xl">
          Lorem ipsum dolor sit amet consectetur
        </h2>
      </div>
      {/* Tabs Header */}
      <Tabs defaultValue="frontend" className="w-full">
        <TabsList className="flex justify-between border-b bg-transparent rounded-none">
          {tabData.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="
                relative px-6 py-3 text-sm font-semibold
                data-[state=active]:text-red-600
                data-[state=active]:after:absolute
                data-[state=active]:after:left-0
                data-[state=active]:after:bottom-0
                data-[state=active]:after:h-[3px]
                data-[state=active]:after:w-full
                data-[state=active]:after:bg-red-600
              "
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Content */}
        <TabsContent value="frontend" className="mt-8">
          <TabContent />
        </TabsContent>

        <TabsContent value="uiux" className="mt-8">
          <TabContent />
        </TabsContent>

        <TabsContent value="backend" className="mt-8">
          <TabContent />
        </TabsContent>

        <TabsContent value="frameworks" className="mt-8">
          <TabContent />
        </TabsContent>

        <TabsContent value="marketing" className="mt-8">
          <TabContent />
        </TabsContent>
      </Tabs>
    </section>
  );
}
