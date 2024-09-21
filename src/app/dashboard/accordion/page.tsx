import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const items = [
  {
    id: "1",
    title: "¿Es confiable?",
    content: "Sí. Es confiable y seguro.",
  },
  {
    id: "2",
    title: "¿Es accesible?",
    content: "Sí. Cumple con la mayoría de los estándares de accesibilidad.",
  },
  {
    id: "3",
    title: "¿Es gratis?",
    content: "Sí. Es gratis y de código abierto.",
  },
]


export default function AccordionDemo() {
  return (
    <Accordion type="multiple"  className="w-full">
      {items.map((item) => (
        <AccordionItem value={item.id} key={item.id}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}	
    </Accordion>
  )
}
