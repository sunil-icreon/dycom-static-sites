import type { Metadata } from 'next';
import Image from 'next/image';

import { Container, MediaHero, Button } from '@repo/base-ui';

import { FaqAccordion } from '../../components/generated/faq-accordion';

// Note: the live source (https://anscollc.com/faq-es/) does not localize its <title>/<html lang> —
// the document title and lang attribute stay the same as the English /faq page even though the
// visible content on this page is entirely in Spanish. We preserve that title verbatim below for
// fidelity; overriding <html lang="en"> from the root layout to "es" for just this route was called
// out as out of scope for this task (shared layout.tsx), so it's flagged here for follow-up.
export const metadata: Metadata = {
  title: 'Hello Neighbor!',
  description:
    'Our company is planning to lay fiber optic cables underground throughout your community for a major telecommunications provider.',
};

const FAQ_ITEMS = [
  {
    question: '¿Cuándo se realizarán las obras?',
    answer:
      'Generalmente, las obras comienzan dentro de las dos semanas siguientes a la notificación a los residentes. En la mayoría de los casos, los residentes recibirán un cartel en la puerta con detalles.',
  },
  {
    question: '¿Dónde se realizarán las obras?',
    answer: 'Las obras se realizarán en el área de derecho de paso de las propiedades a lo largo de Mesa, Arizona.',
  },
  {
    question: '¿Cuánto durarán las obras?',
    answer:
      'El plazo de instalación previsto es de 30 a 45 días. Nuestro compromiso es minimizar cualquier inconveniente para usted y sus vecinos, manteniendo al mismo tiempo estándares de calidad excepcionales.',
  },
  {
    question: '¿Excavarán en mi propiedad?',
    answer:
      'Puede que sí, pero quédese tranquilo. Nuestros profesionales se encargarán de todo con pericia, restaurando el estado original de su jardín tras la instalación.',
  },
  {
    question: '¿Tendré que reparar mi propiedad?',
    answer: (
      <>
        <p className="m-0">
          No – Nuestros profesionales restaurarán la condición original de su jardín después de cualquier excavación
          o instalación.
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <Image
            src="https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2024/04/antes-300x276-1.jpg"
            alt="Antes de la instalación"
            width={300}
            height={276}
            className="h-auto w-[300px] max-w-full"
          />
          <Image
            src="https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2024/04/despues-300x276-1.jpg"
            alt="Después de la instalación"
            width={300}
            height={276}
            className="h-auto w-[300px] max-w-full"
          />
        </div>
      </>
    ),
  },
  {
    question: '¿Qué pasa si algo se daña?',
    answer: (
      <>
        Comuníquese con nuestra Línea de atención al cliente:{' '}
        <a href="tel:877-245-6660" className="underline">
          877-245-6660
        </a>{' '}
        o envíanos un correo electrónico a{' '}
        <a href="mailto:customercare@anscollc.com" className="underline">
          customercare@anscollc.com
        </a>
      </>
    ),
  },
  {
    question: '¿Puedo negar el acceso a mi jardín para detener estas obras?',
    answer:
      'No, las obras se llevan a cabo en la zona de derecho de paso. El permiso para trabajar en esta zona se rige por la ciudad o el municipio a través de una servidumbre de servicios públicos.',
  },
  {
    question: '¿Qué es una servidumbre de servicios públicos?',
    answer:
      'Una servidumbre de servicios públicos/P.U.E. o Derecho de Vía, a menudo llamado ROW, es un derecho legal que permite a los servicios públicos acceder a partes específicas de una propiedad para realizar tareas de infraestructura. Estas Servidumbres son vitales para mantener los servicios esenciales y, al mismo tiempo, permitir el uso del terreno. Dentro del alcance de la Servidumbre, las restricciones no contemplan obstrucciones.',
  },
  {
    question: '¿Por qué están sus marcas de pintura en mi propiedad?',
    answer:
      'Para garantizar que la infraestructura subterránea esté protegida cuando se produzca la actividad de excavación, las empresas de servicios públicos deben ubicar sus servicios públicos existentes en el área antes de la excavación. Es posible que observe diversas marcas de pintura en su propiedad o cerca de ella. Estas marcas sirven de guía a nuestras cuadrillas para que sepan lo que hay debajo de la superficie aun antes de comenzar a usar las palas. Estas marcas de pintura irán desapareciendo con el tiempo.',
  },
  {
    question: '¿Qué tipo de equipos utilizarán?',
    answer: (
      <>
        <p className="m-0">
          Estos son los equipos que puede ver en su vecindario cuando se entierren cables de fibra óptica.
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <strong>Pala</strong>: es un elemento esencial para la excavación inicial de las zanjas.
          </li>
          <li>
            <strong>Retroexcavadora o excavadora</strong>: se utiliza cuando las condiciones de suelo son difíciles o
            para zanjas más grandes.
          </li>
          <li>
            <strong>Máquina de microzanja</strong>: máquina corta fácilmente hormigón o asfalto, utilizando una
            cuchilla circular grande para colocar la fibra. Los restos de extracción se aspiran mediante una
            excavadora aspiradora, que es como una aspiradora comercial extremadamente grande.
          </li>
          <li>
            <strong>Taladro direccional</strong>: es una herramienta especial para crear vías subterráneas con
            mínima alteración de la superficie.
          </li>
          <li>
            <strong>Equipo de perforación con Topo misil:</strong> resulta ideal para distancias más cortas, ya que
            crea túneles con un mínimo impacto en la superficie.
          </li>
          <li>
            <strong>Camión con cesta</strong>: a menudo denominado camión elevador o camión con pluma, es un tipo de
            elevador aéreo o plataforma de trabajo esencial para colgar cables de fibra óptica.
          </li>
          <li>
            <strong>Equipo para tracción de cables</strong>: garantiza una instalación de cables uniforme y segura.
          </li>
          <li>
            <strong>Equipos de empalme de fibra óptica:</strong> une filamentos individuales para lograr integridad
            de la red.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: '¿Qué es una servidumbre de lote trasero?',
    answer:
      'Una servidumbre de lote trasero es cuando un terreno no tiene acceso al camino a la vía pública, es decir. como un patio trasero y requiere entrada por el patio delantero o por el camino de entrada.',
  },
  {
    question: '¿En qué consisten las microzanjas?',
    answer: (
      <>
        <p className="m-0">
          Las microzanjas representan una tecnología mínimamente invasiva que mejora la capacidad de colocar cables
          de fibra óptica de forma rápida y eficaz en entornos de construcción desafiantes, como lechos de
          carreteras existentes y densas áreas urbanas. El proceso de microzanjas comprende lo siguiente:
        </p>
        <ul className="my-3 list-disc space-y-2 pl-5">
          <li>cortar una zanja angosta en la superficie existente para crear un vacío</li>
          <li>eliminar los escombros</li>
          <li>realizar el tendido de cables</li>
          <li>aplicar un compuesto que no se contrae en dicho vacío</li>
          <li>aplicar material de cobertura.</li>
        </ul>
        <p className="m-0">
          El proceso implica hacer un corte angosto en la superficie existente y luego, retirar los escombros de la
          zanja al mismo tiempo que se utiliza un sistema de vacío especialmente diseñado. Luego, se coloca el
          conducto de fibra en la zanja junto con un relleno de material fluido especial.
        </p>
      </>
    ),
  },
  {
    question: '¿Qué es esta caja de servicios públicos enterrada en mi jardín?',
    answer:
      'En ciertos casos, es posible que tengamos que colocar un registro en su propiedad: se trata de una caja enterrada en el suelo para empalmar la fibra. La servidumbre de servicios públicos nos autoriza a hacerlo.',
  },
];

const SUPPORT_LOCATIONS = [
  { state: 'Arizona', phone: '1-855-520-1757', email: 'customercare@anscollc.com' },
  { state: 'Georgia', phone: '1-877-245-6660', email: 'CustomerCare@Anscollc.com' },
  { state: 'North Carolina', phone: '1-877-245-6660', email: 'CustomerCare@Anscollc.com' },
  { state: 'South Carolina', phone: '1-877-245-6660', email: 'CustomerCare@Anscollc.com' },
  { state: 'Texas', phone: '1-855-520-1757', email: 'CustomerCare@Anscollc.com' },
];

export default function FaqEsPage() {
  return (
    <>
      <MediaHero
        background={{
          type: 'image',
          src: 'https://eadn-wc03-3197147.nxedge.io/wp-content/uploads/2023/08/contact-banner.webp',
          alt: '',
        }}
        title="Hola, Vecino"
        minHeightClassName="min-h-[280px] md:min-h-[360px]"
      />

      <Container>
        <div className="mx-auto max-w-3xl py-12 text-center">
          <h2 className="mb-3 font-heading text-2xl font-semibold text-ink md:text-3xl">
            ¡Estamos ayudando a llevar fibra óptica a su comunidad!
          </h2>
          <p className="text-ink-soft">
            Tenemos noticias emocionantes para su comunidad. Ansco, nuestra compañía, tiene previsto tender cables de
            fibra óptica subterráneos en toda la comunidad para un importante proveedor de telecomunicaciones.
          </p>
          <p className="text-ink-soft">
            Los cables de fibra óptica ofrecen la conexión a Internet más rápida y confiable disponible actualmente.
            Con esta tecnología, disfrutará de velocidades de Internet ultrarrápidas, transmisiones de video sin
            interrupciones y llamadas de voz nítidas.
          </p>
          <p className="font-bold text-ink">
            La gente conectando América<sup>™</sup>
          </p>
          <div className="mt-6 flex flex-col items-center gap-3">
            <Button href="/contact">¿Preguntas? Llame a nuestro equipo.</Button>
            <Button href="/faq">Click Here to View in English</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 border-y border-border py-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <h3 className="mb-3 font-heading text-xl font-semibold text-ink">Instalación</h3>
            <p className="text-ink-soft">
              Nuestro equipo ha diseñado un proceso de instalación perfecto que no alterará su vida cotidiana.
            </p>
            <p className="text-ink-soft">
              Ya sea que enterremos los cables de fibra óptica bajo tierra o utilicemos postes de servicios públicos
              existentes, el trabajo se llevará a cabo de la manera más discreta y eficiente posible.
            </p>
            <p className="font-semibold text-ink">
              Vea nuestro video informativo para saber más sobre nuestro proceso.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                title="ANSCO - Mesa Arizona - Long (Spanish)"
                src="https://player.vimeo.com/video/884943021?h=1c2e308c0f&dnt=1&app_id=122963"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="mb-6 font-heading text-2xl font-semibold text-ink md:text-3xl">Preguntas frecuentes</h2>
            <FaqAccordion items={FAQ_ITEMS} />
          </div>
          <div className="md:col-span-1">
            <div className="flex flex-col gap-6">
              {SUPPORT_LOCATIONS.map((location) => (
                <div key={location.state}>
                  <h4 className="mb-1 font-heading text-lg font-semibold text-ink">{location.state}</h4>
                  <p className="m-0 text-ink-soft">
                    Póngase en contacto con nosotros directamente al {location.phone}.
                    <br />
                    Email:
                    <br />
                    <a href={`mailto:${location.email}`} className="underline">
                      {location.email}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
