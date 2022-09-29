import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export function FAQ({ className, bgColor = "faq-bg-color" }) {
  return (
    <div className={`${bgColor} ${className}`}>
      <div className="container">
        <div className="py-[24px] sm:py-[40px] flex flex-col items-center">
          <p className="text-center text-[26px] sm:text-[40px] sm:leading-[50px] font-bold mb-[20px] sm:mb-[40px]">
            Часто задаваемые вопросы
          </p>
          <div className="sm:w-[920px]">
            <Accordion className={`accordion-shadow-none ${bgColor}`}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="py-[10px] text-[20px] sm:text-[24px] font-[500]">
                  Могу ли я совмещать доставку с учебой ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography> </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={`accordion-shadow-none ${bgColor}`}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="py-[10px] text-[20px] sm:text-[24px] font-[500]">
                  Когда мне будут приходить выплаты?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography> </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={`accordion-shadow-none ${bgColor}`}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="py-[10px] text-[20px] sm:text-[24px] font-[500]">
                  Сколько заказов я успею выполнить за час?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography> </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={`accordion-shadow-none ${bgColor}`}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className="py-[10px] text-[20px] sm:text-[24px] font-[500]">
                  Сколько курьер зарабатывает в месяц?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography> </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
