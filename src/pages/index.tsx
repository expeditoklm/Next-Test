
// pages/index.tsx
import { useState } from "react";
import { Table } from "@/ui/design-system/table/table";
import { Input } from "@/ui/design-system/input/input";


const Home = () => {
  const [nc, setNc] = useState<number | null>(null);
  const [nl, setNl] = useState<number | null>(null);

  const handleFormSubmit = (newNc: number, newNl: number) => {
    setNc(newNc);
    setNl(newNl);
  };

  const handleButtonClick = () => {
    // Logic to handle the button click and show the table after 5 seconds
  };

  return (
    <div className="p-9">
      <Input onSubmit={handleFormSubmit} />
      {nc !== null && nl !== null && (
        <>
          <Table nc={nc} nl={nl} />
        </>
      )}
    </div>
  );
};

export default Home;






























// import { Seo } from "@/ui/components/seo/seo";
// import { Typography } from "@/ui/design-system/typography/typography";
// import { Button } from "@/ui/design-system/button/button";
// import { Ri24HoursFill,RiUser6Fill } from "react-icons/ri";
// import { Spinner } from "@/ui/design-system/spinner/spinner";
// import { Logo } from "@/ui/design-system/logo/logo";
// import { Avatar } from "@/ui/design-system/avatar/avatar";
// import { Tableau } from "@/ui/design-system/tableau/tableau";
// import { DynamicTable } from "@/ui/design-system/dynamicTable/dynamicTable";



// export default function Home() {
//   return (
//     <div>
//       <Seo title="Coders Monkeys" description="Description..." />
//       <div className="flex items-center gap-4 p-10">
//         <Spinner size="small" variant="primary"/>
//         <Spinner size="medium" variant="primary"/>
//         <Spinner size="large" variant="primary"/>
//       </div>

//       {/* <Tableau
//   columns={["Name", "Age", "Location"]}
//   data={[
//     { Name: "John Doe", Age: 25, Location: "New York" },
//     { Name: "Jane Smith", Age: 30, Location: "San Francisco" },
//   ]}
// /> */}

// <DynamicTable/>



//       <div className="flex items-center gap-4  p-10">
//         <Avatar src="/assets/images/img.png" alt="Mon image"  size="small"/>
//         <Avatar src="/assets/images/img.png" alt="Mon image" />
//         <Avatar src="/assets/images/img.png"  alt="Mon image" size="large"/>
//       </div>

//       <div className="flex items-center gap-4 p-10">
//         <Logo size="very-small"/>
//         <Logo size="small"/>
//         <Logo />
//         <Logo size="large"/>
//       </div>

//       <div className="flex items-center gap-4 p-10">
//         <Button isLoading size="small" >Accent</Button>
//         <Button isLoading variant="secondary" icon={{icon: RiUser6Fill}} iconPosition="left" size="small" >Accent</Button>
//         <Button isLoading variant="outline" size="small">Accent</Button>
//         <Button isLoading variant="ico" iconTheme="accent" icon={{icon: RiUser6Fill}} size="small" >Accent</Button>
//         <Button isLoading variant="ico" iconTheme="gray" icon={{icon: RiUser6Fill}} size="small" >Accent</Button>
//       </div>

//       <div className="flex items-center gap-4 p-10">
//         <Button size="small" >Accent</Button>
//         <Button variant="secondary" icon={{icon: RiUser6Fill}} iconPosition="left" size="small" >Accent</Button>
//         <Button variant="outline" size="small">Accent</Button>
//         <Button variant="ico" iconTheme="accent" icon={{icon: RiUser6Fill}} size="small" >Accent</Button>
//         <Button variant="ico" iconTheme="secondary" icon={{icon: RiUser6Fill}} size="small" >Accent</Button>
//         <Button variant="ico" iconTheme="gray" icon={{icon: RiUser6Fill}} size="small" >Accent</Button>
//       </div>



//       <div className="flex items-center gap-4 p-10">
//         <Button >Accent</Button>
//         <Button variant="secondary" >Accent</Button>
//         <Button variant="outline" icon={{icon: RiUser6Fill}} iconPosition="left" >Accent</Button>
//         <Button variant="disabled" disabled >Accent</Button>
//         <Button variant="ico" iconTheme="accent" icon={{icon: RiUser6Fill}}>Accent</Button>
//         <Button variant="ico" iconTheme="secondary" icon={{icon: RiUser6Fill}}>Accent</Button>
//         <Button variant="ico" iconTheme="gray" icon={{icon: RiUser6Fill}}>Accent</Button>

//       </div>


//       <div className="flex items-center gap-4 p-10">
//         <Button size="large" >Accent</Button>
//         <Button variant="secondary"  size="large">Accent</Button>
//         <Button variant="outline" size="large" >Accent</Button>
//         <Button variant="disabled" size="large" disabled icon={{icon: RiUser6Fill}} iconPosition="right">Accent</Button>
//         <Button variant="ico" iconTheme="accent" icon={{icon: RiUser6Fill}} size="large" >Accent</Button>
//         <Button variant="ico" iconTheme="secondary" icon={{icon: RiUser6Fill}} size="large" >Accent</Button>
//         <Button variant="ico" iconTheme="gray" icon={{icon: RiUser6Fill}} size="large" >Accent</Button>

//       </div>


//       <div className="space-y-5">
//         <Typography variant="display" component="div">
//           Coders Monkeys
//         </Typography>

//         <Typography theme="primary" variant="body-lg" component="h1">
//           Coders Monkeys
//         </Typography>

//         <Typography theme="secondary" variant="lead" component="div">
//           Coders Monkeys
//         </Typography>

//         <Typography variant="body-sm" component="div">
//           Coders Monkeys
//         </Typography>

//         <Typography variant="caption3" component="div">
//           Coders Monkeys
//         </Typography>

//         <Typography variant="caption4" weight="medium" component="div">
//           Coders Monkeys
//         </Typography>
//       </div>



//     </div>
//   );
// }





































