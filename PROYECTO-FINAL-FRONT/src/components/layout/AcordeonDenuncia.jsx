import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Denuncias } from "./../../views/VerDenuncias";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

export default function ControlledAccordions({ denuncias=[] }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  console.log(denuncias)
  return (
    <div>
      {denuncias.map((denuncia, key) => {
      
        return (
          <Accordion sx={{margin: "10px"}}
            expanded={expanded === key}
            onChange={handleChange(key)}
            key={"denuncia "+ key}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                <ReceiptLongIcon />
               Infraccion
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                {denuncia.fecha}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{denuncia.detalles}</Typography>
            </AccordionDetails>
          </Accordion>
         
        );
      })}
    </div>
  );
}
