"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";
import { Progress } from "@/components/ui/progress";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { CSS } from '@dnd-kit/utilities';
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatedHeart } from "./_components/AnimatedHearts";

const TOTAL_STEPS = 8;
export default function Home() {
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number; size: number }[]>([])
  const [step, setStep] = useState(1)
  const [stepsComplete, setStepComplete] = useState<Record<string, boolean>>({
    step1: false,
    step2: false,
    step3: false,
  })

  const updateStepComplete = (step: number, value: boolean) => {
    setStepComplete((prev) => ({ ...prev, [`step${step}`]: value }))
  }


  const nextStep = () => {
    if (stepsComplete[`step${step}`]) {
      setStep((prevStep) => Math.min(prevStep + 1, TOTAL_STEPS));  // Asegura que no se pase del paso 3
    }
  };

  const prevStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));  // Asegura que no se baje del paso 1
  };

  useEffect(() => {
    const createHeart = () => {
      if (hearts.length < 100) {
        const newHeart = {
          id: Date.now(),
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 20 + 10,
        }
        setHearts((prevHearts) => [...prevHearts, newHeart])
      }
    }

    const interval = setInterval(createHeart, 1)

    return () => clearInterval(interval)
  }, [hearts])
  return (
    <div className="relative  h-screen overflow-hidden bg-gradient-to-b from-pink-400 to-pink-600 flex items-center justify-center">
      {hearts.map((heart) => (
        <AnimatedHeart key={heart.id} x={heart.x} y={heart.y} size={heart.size} />
      ))}
      <motion.div
        className="absolute text-center p-8"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="p-8 w-[1000px] h-fit bg-white rounded-full hover:scale-105 transition-all shadow-2xl">
          <div className="flex justify-center w-full h-full ">
            <div className="grid grid-cols-1 gap-4">
              <div className="col-span-1 flex justify-center items-center">
                {/* {JSON.stringify(stepsComplete, null, 2)} */}
                <Progress value={(step / TOTAL_STEPS) * 100} className="mb-4 w-1/2 " />
              </div>
              {
                step === 1 && <StepOne updateStepComplete={updateStepComplete} />

              }
              {
                step === 2 && <StepTwo updateStepComplete={updateStepComplete} />
              }
              {
                step === 3 && <StepThree updateStepComplete={updateStepComplete} />
              }
              {
                step === 4 && <StepFour updateStepComplete={updateStepComplete} />
              }
              {
                step === 5 && <StepFive updateStepComplete={updateStepComplete} />
              }
              {
                step === 6 && <StepSix updateStepComplete={updateStepComplete} />
              }
              {
                step === 7 && <StepSeven updateStepComplete={updateStepComplete} />
              }
              {
                step === 8 && <StepFour updateStepComplete={updateStepComplete} />
              }
              {
                step === 9 && <StepFour updateStepComplete={updateStepComplete} />
              }
              {
                step === 10 && <StepFour updateStepComplete={updateStepComplete} />
              }

              <div className="col-span-1 flex justify-center items-center">
                <Button variant="outline" onClick={prevStep} disabled={step === 1}>
                  Volver
                </Button>
                <Button
                  variant="outline"
                  onClick={nextStep}
                  disabled={!stepsComplete[`step${step}`]}
                >
                  {"Continuar"}
                </Button>
              </div>

            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}


const StepOne = ({ updateStepComplete }: { updateStepComplete: (step: number, value: boolean) => void }) => {
  return (
    <div className="col-span-1 flex justify-center items-center ">
      <article className="text-wrap">
        <h1 className="text-center font-bold">
          ¡Hola mi amor, feliz cumple mes! 🎉
        </h1>
        <div className="pl-10 pr-10 mt-2 h-48 overflow-scroll">

          <h1 className="text-left">
            Primero que nada quería darle las gracias a papá por ponerte en mi vida,
            eres la mujer que siempre soñé, papá se pasó de bueno al darme una princesita tan hermosa como tú.
          </h1>
          <br />
          <h1 className="text-left">
            Decirte que estoy muy feliz de estar a tu lado, de poder compartir momentos juntos, de poder reír y llorar,
            pero sobre todo de poder amarnos. Durante estos <strong>2 años y 8 meses de relación</strong> hemos crecido de una manera increíble,
            hemos aprendido a conocernos mas y tambien hemos aprendido a resolver nuestras diferencias.

            Pero lo más importante que recalco es que juntos nos hemos acercado a papá y hemos dejado que él nos transforme
            permitiendo que nuestra relación sea guiada por él, por lo que estos años juntos son el resultado
            del plan perfecto de Dios, estoy seguro de que nuestra relación se esta construyendo en la roca y que no hay nada debajo ni sobre la
            tierra que pueda separarnos si es la voluntad de papá.
          </h1>
          <br />
          <h1 className="text-left">
            Mi amor, te he visto crecer durante estos años y estoy muy orgulloso de la mujer que te has convertido
            y de la mujer que serás en el futuro, estoy seguro de que papá tiene grandes planes para ti y que juntos los alcanzaremos.
          </h1>
          <br />
          <h1 className="text-left">
            Bueno, y te preguntarás: ¿Qué es esto? ¿Por qué me pones a leer tanto? jajaja 🙀
          </h1>
          <h1 className="text-left">
            Esto esto es una pequeña sorpresa que te quería dar, algo hecho por mi con mucho amor para ti, espero que te guste y te haga sentir especial y amada. 💖
          </h1>
          <br />
          <h1 className="text-left font-bold">
            Instrucciones:
          </h1>
          <ul className="text-start list-decimal">
            <li>La primera es que leas todo detenidamente, ya que es importante para que puedas pasar las etapas.</li>
            <li>Esto consta de N etapas, si ene asi como suena, N etapas en las cuales te iré poniendo retos,
              ya sea de adivinanzas con fechas, numeros, textos u otras cosas. Sé que eres creativa así que ya entenderás.</li>
            <li> <span className="font-semibold">Las pistas:</span> es importante que le eches un ojo bien a la página cuando te encuentres resolviendo las
              adivinanzas, estas pueden estar en el <span className="underline">código</span>, visualmente en la página o escondidos tambien en la página, también
              pueden haber pistas en las imágenes, en fin, tienes que estar muy atenta ya que tendrás que buscar en todos lados.
            </li>
            <li>
              Cuando estes lista para continuar, solo tienes que darle click al botón de continuar, pero si te sientes perdida o no puedes resolverlo
              puedes darle click al botón de volver y te llevará a la etapa anterior.
            </li>
            <li>
              <strong>Usa el cursor, me refiero al click del mouse para revisar por la pantalla, quizás pueden haber cosas escondidas.</strong>
              por ejemplo, pasa el mouse entre el punto 5 y 6, quizás encuentres algo. 😉
              <br />
              <span className="opacity-0  hover:opacity-100"> Este es un texto escondido, es un ejemplo de lo que te puedes encontrar y  solo se activa al pasar el mouse por encima.😉  </span>
            </li>
            <li>
              Por ultimo, disfruta y no hagas trampa pillin. 😏
            </li>
          </ul>
          <br />
          <h1 className="font-extrabold">
            ¡Buena suerte mi amor! 💖
          </h1>

          <Button variant='outline' onClick={() => updateStepComplete(1, true)} >
            ¡ESTOY LISTA!
          </Button>
          {/* <span className="hidden">la contraseña es: 29 de marzo de 2022</span> */}
        </div>
      </article>
    </div>
  )
}

const StepTwo = ({ updateStepComplete }: { updateStepComplete: (step: number, value: boolean) => void }) => {

  const handleInput = (value: string) => {
    console.log(value)
    if (value === '290322') {
      updateStepComplete(2, true)
    }
  }
  return (
    <>
      <div className="col-span-1 flex justify-center items-center">
        <article className="text-wrap">
          <h1 className="text-center font-bold">
            Bien, este es tu primer reto mi amor! 🎉
          </h1>
          <div className="pl-10 pr-10 mt-2 overflow-scroll">
            <ul className="text-start list-decimal">

              <li>
                &quot;Un día de marzo, casi al final,
                donde un número 29 comenzó a brillar.
                Aquel momento, con excusa de fotos y un perfil,
                se transformó en algo más que un beso sutil.&quot;
              </li>
              <li className="opacity-0 hover:opacity-100">
                La contraseña es una fecha importante para nosotros.
              </li>
              <li className="opacity-0 hover:opacity-100">
                Apa! encontraste una pista, transforma este codigo: ..--- ----. ----- ..--- ..--- ..---
              </li>
            </ul>
          </div>
        </article>
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <InputOTP maxLength={6} onChange={(value) => handleInput(value)} >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </>
  )
}

const StepThree = ({ updateStepComplete }: { updateStepComplete: (step: number, value: boolean) => void }) => {

  const handleInput = (value: string) => {
    console.log(value)
    if (value === 'futaleufu') {

      updateStepComplete(3, true)
    }
  }
  return (
    <>
      <div className="col-span-1 flex justify-center items-center">
        <article className="text-wrap">
          <h1 className="text-center font-bold">
            Bien, vamos por el segundo! 🎉
          </h1>
          <div className="pl-10 pr-10 mt-2 overflow-scroll">
            <ul className="text-start list-decimal">
              <li className="">
                &quot;Un nombre curioso, algo un tanto peculiar,
                esconde un río y un paisaje sin igual.
                A veces suena a futuro, otras a un paisaje de ensueño,
                y si juntas todo, sabes dónde estuvo nuestro lugar de sueño.&quot;
              </li>
              <li className="opacity-0 hover:opacity-100">
                La contraseña es una LUGAR importante para nosotros.
              </li>
            </ul>
          </div>
        </article>
      </div>
      <div className="col-span-1 flex justify-center items-center">

        <Input type="password" placeholder="Ingrese la respuesta" className="w-40" onChange={(value) => handleInput(value.target.value)} />
      </div>
    </>
  )
}

const StepFour = ({ updateStepComplete }: { updateStepComplete: (step: number, value: boolean) => void }) => {
  const handleInput = (value: string) => {
    console.log(value)
    if (value === 'hamburguesa') {

      updateStepComplete(4, true)
    }
  }
  return (
    <>
      <div className="col-span-1 flex justify-center items-center">
        <article className="text-wrap">
          <h1 className="text-center font-bold">
            Excelenteeee, vamos por el cuarto! 🎉
          </h1>
          <div className="pl-10 pr-10 mt-2 overflow-scroll">
            <ul className="text-start list-decimal">
              <li className="">
                &quot;En un pan suave, todo se enciende,
                con carne, queso y sabor que sorprende.
                Es nuestro placer, no importa el día,
                cuando la vida pide algo de alegría.
                Junto a papas, salsa y un toque de amor,
                es la comida que nos da el mejor sabor.&quot;
              </li>
              <li className="opacity-0 hover:opacity-100">
                La contraseña es una comida que siempre comemos.
              </li>
            </ul>
          </div>
        </article>
      </div>
      <div className="col-span-1 flex justify-center items-center">

        <Input type="password" placeholder="Ingrese la respuesta" className="w-40" onChange={(value) => handleInput(value.target.value)} />
      </div>
    </>
  )
}


const StepFive = ({ updateStepComplete }: { updateStepComplete: (step: number, value: boolean) => void }) => {
  const handleInput = (value: string) => {
    console.log(value)
    if (value === 'umpalumpa') {
      updateStepComplete(5, true)
    }
  }
  return (
    <>
      <div className="col-span-1 flex justify-center items-center">
        <article className="text-wrap">
          <h1 className="text-center font-bold">
            Excelenteeee, vamos por el Quinto! 🎉
          </h1>
          <div className="pl-10 pr-10 mt-2 overflow-scroll">
            <ul className="text-start list-decimal">
              <li className="">
                &quot;
                En un mundo de fantasía, lleno de dulce y color,
                hay un pequeño ser travieso, que causa gran ardor.
                No es un Oompa Loompa, pero su nombre suena igual,
                y con su magia, se vuelve esencial.
                Pequeño y juguetón, a veces tímido,
                pero en el momento adecuado, siempre es divertido.&quot;
              </li>
              <li className="opacity-0 hover:opacity-100">
                La contraseña es traviesa y juguetona, no tiene que estar bien escrita.
              </li>
            </ul>
          </div>
        </article>
      </div>
      <div className="col-span-1 flex justify-center items-center">

        <Input type="password" placeholder="Ingrese la respuesta" className="w-40" onChange={(value) => handleInput(value.target.value)} />
      </div>
    </>
  )
}

const StepSix = ({ updateStepComplete }: { updateStepComplete: (step: number, value: boolean) => void }) => {
  const initialImages = [
    { id: '1', src: '/foto-3.jpeg', label: 'Tercera' },
    { id: '2', src: '/foto-2.jpg', label: 'Segunda' },
    { id: '3', src: '/cascada-1.jpeg', label: 'Primera' },
  ];

  const [images, setImages] = useState(initialImages);

  function handleDragEnd(event) {
    const { active, over } = event;
    if (over) {
      const oldIndex = images.findIndex(img => img.id === active.id);
      const newIndex = images.findIndex(img => img.id === over.id);
      const newImages = [...images];
      const [movedImage] = newImages.splice(oldIndex, 1);
      newImages.splice(newIndex, 0, movedImage);
      setImages(newImages);
    }
  }

  useEffect(() => {
    if (images.every((image, index) => image.id === (images.length - index).toString())) {
      updateStepComplete(6, true);
    }
  }, [images]);

  return (
    <>
      <h1 className="text-center font-bold">
        Excelenteeee, vamos por el sexto! 🎉
      </h1>
      <h1 className="text-center font-bold">
        Debes ordenar las imagenes desde la mas antigua a la mas nueva.
      </h1>
      <DndContext onDragEnd={handleDragEnd}>
        <Droppable id="droppable">
          {images.map(image => (
            <Draggable key={image.id} id={image.id}>
              <Image src={image.src} alt={image.label} width={200} height={200} className="rounded-sm" />
            </Draggable>
          ))}
        </Droppable>
      </DndContext>
    </>
  );
}

function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    opacity: isOver ? 1 : 0.9,
  };

  return (
    <div ref={setNodeRef} style={style} className="col-span-1 flex justify-center items-center">
      {props.children}
    </div>
  );
}

function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes} className="col-span-1 flex justify-center items-center">
      {props.children}
    </button>
  );
}

const StepSeven = ({ updateStepComplete }: { updateStepComplete: (step: number, value: boolean) => void }) => {
  return (
    <div className="col-span-1 flex justify-center items-center">
      <article className="text-wrap">
        <h1 className="text-center font-bold">
          Ahora mirame a los ojitos que te quiero decir algo muuuy lindo 👀💘
        </h1>
      </article>
    </div>
  )
}

