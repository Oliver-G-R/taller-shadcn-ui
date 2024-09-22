"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Share2Icon, PaperPlaneIcon} from "@radix-ui/react-icons";
import Link from "next/link";

export default function ButtonPage() {
  return (
    <div className="flex flex-col gap-10">
      <section className="">
        <h2 className="mb-10">
          Botones disponibles
        </h2>
       <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(100px,1fr))]">
          <Button variant="destructive" >Destructive</Button>
          <Button variant="ghost">ghost</Button>
          <Button variant="link">link</Button>
          <Button variant="outline">outline</Button>
          <Button variant="secondary">secondary</Button>
          <Button disabled>disabled</Button>
       </div>
      </section>


      <section className="">
        <h1 className="mb-10">
          Mis botones
        </h1>

         <div className="flex flex-wrap gap-10">
           <div>
              <h3 className="mb-3">
                Link que parece un botón
              </h3>
    
              <Link className={buttonVariants({variant: 'outline'})} href="#">
                Boton de link
              </Link>
           </div>
        
           <div>
              <h3 className="mb-3">
                Botón con icono
              </h3>
    
              <Button variant="outline" size="icon">
                  <Share2Icon className=" size-5"/>
              </Button>
           </div>
        
        
           <div>
              <h3 className="mb-3">
                Botón con icono y texto
              </h3>
    
              <Button className="flex justify-between w-[100px] bg-blue-400 text-white " >
                  Enviar
                  <PaperPlaneIcon className="size-4"/>
              </Button>
           </div>
         </div>

        
      </section>


    </div>
  )
}
