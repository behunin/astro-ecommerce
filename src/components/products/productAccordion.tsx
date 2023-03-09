import { For } from 'solid-js';
import { Accordion, AccordionGroup, AccordionHeader } from '../utils/Accordian/Accordian';
import "./productAccordian.css"

interface Props {
  data: object
}

export default function ProductAccordion({
  data
}: Props) {

  const items = Object.entries(data)

  return (
    <div>
      <AccordionGroup allowMultiple={true} allowToggle={true}>
        <For each={items}>
          {(item) => (
            <Accordion>
              <AccordionHeader><b>{item[0]}</b></AccordionHeader>
              <p>{item[1]}</p>
            </Accordion>
          )}
        </For>
      </AccordionGroup>
    </div >
  );
}





