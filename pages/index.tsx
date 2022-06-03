import { Button } from '@/components/Elements/Button'
import { Spacer } from '@/components/Elements/Spacer'
import type { NextPage } from 'next'
import { ArrowRightIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import {
  AcademicCapIcon,
  AdjustmentsIcon,
  CollectionIcon,
  DeviceMobileIcon,
  PuzzleIcon,
  SearchIcon,
} from '@heroicons/react/outline'
import FeatureCard from '@/components/Card'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import JotformEmbed from 'react-jotform-embed'

const i18n = {
  de: {
    title: 'Digitale Abenteuer für Bildungs&shy;einrich&shy;tungen',
    subtitle:
      'ist eine Plattform zum Erstellen von digitalen Escape Games für Bildungseinrichtungen',
    create: 're:quest erstellen',
    notWorking: 'Das funktioniert leider noch nicht',
    moreInformation: 'Weitere Informationen',
    interested: 'Bist Du interessiert?',
    stayTuned:
      'Möchten Sie auf dem Laufenden gehalten werden und eventuell zu wenigen Museen gehören, mit denen wir interessante Beispiele für unsere re:quests erstellen? Als Dankeschön bieten wir eine kostenlose sechsmonatige Lizenz für 100 Besucher an.',
    features: {
      adventures: {
        title: 'Young Visitor Engagement',
        description: (
          <ul className="list-disc">
            <li className="m-2">
              Anziehung junges Publikums in einem eigenen Format
            </li>
            <li className="m-2">
              das Museum als spannendes Freizeitort attraktiv machen
            </li>
            <li className="m-2">
              clevere Spiele für Einzelpersonen und Gruppen/Familien
            </li>
          </ul>
        ),
      },
      digitalEducation: {
        title: 'Storytelling mit Rätseln',
        description: (
          <ul className="list-disc">
            <li className="m-2">
              Ein einfaches und handliches Werkzeug für Museumspädagogen
            </li>
            <li className="m-2">keine besondere Infrastruktur</li>
            <li className="m-2">
              keine Geräte: Besucher verwenden ihre eigene
            </li>
            <li className="m-2">
              schnelle Entwicklung neuer Angebote zu aktuellen Themen
            </li>
            <li className="m-2">frei konfigurierbare Rätsel</li>
          </ul>
        ),
      },
      modular: {
        title: 'Digitale Einbindung von Museumsinhalten',
        description: (
          <ul className="list-disc">
            <li className="m-2">
              Erschließung des Potenzials von Museumsräumen und -objekten
            </li>
            <li className="m-2">
              Automatische Verbindung zu digitalen Sammlungen
            </li>
            <li className="m-2">
              Auf KI basierende Verfahren zur Auswahl geeigneter Hilfsmittel und
              Inhalte
            </li>
            <li className="m-2">
              Automatische Verbindung mit Sozialen Netzwerken
            </li>
          </ul>
        ),
      },
      configure: {
        title: 'Escape Games',
        description: (
          <ul className="list-disc">
            <li className="m-2">
              Spannende Rätsel während der abenteuerliche Reise durch Museum
            </li>
            <li className="m-2">
              Anwendung und Entwicklung digitaler Fertigkeiten mit sozialen
              Medien, Datenerfassung, Programmierung und vielem mehr…
            </li>
          </ul>
        ),
      },
      noInstall: {
        title: 'Einfaches Vorgehen',
        description: (
          <ul className="list-disc">
            <li className="m-2">
              Bring Your Own Device: Nutzung eigener (bekannte, passende) Geräte
            </li>
            <li className="m-2">keine Installation</li>
            <li className="m-2">keine Vorkenntnisse</li>
          </ul>
        ),
      },
      pyhsicalInteraction: {
        title: 'Förderung digitaler Skills',
        description: (
          <ul className="list-disc">
            <li className="m-2">vielfältige Rätsel</li>
            <li className="m-2">Recherche in Sozialen Netzwerken</li>
            <li className="m-2">Erfassung von Sensordaten</li>
            <li className="m-2">Visuelles Programmieren</li>
            <li className="m-2">Kryptographie</li>
          </ul>
        ),
      },
    },
    editor: {
      title: 'Interaktiver Editor',
      description: (
        <span>
          Mit dem <b>re:quest</b> Studio können Museen thematisch an ihren
          individuellen Inhalten und Orten orientierte digitale Escape Games
          erstellen und diese Kindern und Jugendlichen bereitstellen. Dabei
          können nicht nur virtuelle Rätsel, sondern auch reale Elemente wie
          z.B. Bilder oder Exponate oder Webinhalte aus sozialen Netzwerken mit
          einbezogen werden. Die digitalen Escape Games lassen sich dadurch frei
          und interaktiv gestalten. Das <b>re:quest</b> Studio kann von
          Ausstellungsplaner:innen, Medienpädagog:innen oder Content-Creatorn
          der Institution genutzt werden - ein Content Creation und
          Individualisierungs-Service, um die eigenen <b>re:quest</b> in die die
          Corporate Identity der Einrichtung einzubinden wird individuell
          angeboten.
        </span>
      ),
    },
    content: {
      title: 'Individueller Inhalt',
      description: (
        <span>
          Escape Games als spannende Rätselspiele für Gruppen sind in den
          letzten Jahren immer beliebter geworden. Durch eine individuelle
          Abenteuergeschichte und kniffligen Aufgaben entsteht ein Nervenkitzel.
          Mit <b>re:quest</b> wird es nun möglich eigene Escape Games mit
          individueller Story zu entwickeln. Das Besondere: <b>re:quest</b>{' '}
          richtet sich primär an Bildungseinrichtungen, um die eigenen
          Bildungsinhalte spielerisch zu vermitteln und gleichzeitig digitale
          Skills zu fördern. Dadurch soll digitale Bildung an außerschulischen
          Lernorten wie Museen, Bibliotheken oder Schülerlaboren gestärkt
          werden. Nicht nur die Bildungseinrichtungen, sondern besonders Kinder
          und Jugendliche profitieren von den <b>re:quests</b>. Neben spannenden
          Abenteuern und kniffligen Rätseln stärken verschiedene Aufgaben wie
          Datenanalyse, Kryptographie, Datenschutz- und Privacy-rätsel,
          Programmieren oder Medienanalyse die sogenannten 21st Century Skills.
        </span>
      ),
    },
  },
  en: {
    title: 'Digital Escape Games for Educational Institutions',
    subtitle:
      'is a platform for creating digital Escape Games for educational institutions',
    create: 'Create re:quest',
    notWorking: 'Unfortunately this does not work yet',
    moreInformation: 'More information',
    interested: 'Are you interested?',
    stayTuned:
      'Would you like to be kept up to date and possibly be among a few museums with whom we create interesting examples for our re:quests? As a thank you, we offer a free six-month license for 100 visitors.',
    features: {
      adventures: {
        title: 'Young Visitor Engagement',
        description: (
          <ul className="list-disc">
            <li className="m-2">attract young audiences in a unique format</li>
            <li className="m-2">make the museum an exciting leisure venue</li>
            <li className="m-2">
              create clever games for individuals and groups/families
            </li>
          </ul>
        ),
      },
      digitalEducation: {
        title: 'Storytelling with Riddles',
        description: (
          <ul className="list-disc">
            <li className="m-2">
              a simple and handy tool for museum educators
            </li>
            <li className="m-2">no special infrastructure necessary</li>
            <li className="m-2">
              no equipment: visitors use their own devices
            </li>
            <li className="m-2">
              rapid development of new modules on current topics
            </li>
            <li className="m-2">freely configurable puzzles</li>
          </ul>
        ),
      },
      modular: {
        title: 'Digital Integration of Museum Content',
        description: (
          <ul className="list-disc">
            <li className="m-2">
              unlocking the potential of museum spaces and objects
            </li>
            <li className="m-2">automatic connection to digital collections</li>
            <li className="m-2">
              AI-based methods for selecting appropriate tools and content
            </li>
            <li className="m-2">connection with social networks</li>
          </ul>
        ),
      },
      configure: {
        title: 'Escape Games',
        description: (
          <ul className="list-disc">
            <li className="m-2">
              exciting riddles during your adventurous journey through the
              museum
            </li>
            <li className="m-2">
              application and development of digital skills while using social
              media, collecting data, coding, encrypting, etc.
            </li>
          </ul>
        ),
      },
      noInstall: {
        title: 'Simplicity First',
        description: (
          <ul className="list-disc">
            <li className="m-2">
              Bring Your Own Device: usage of personal (known and suitable)
              devices
            </li>
            <li className="m-2">no app installation required</li>
            <li className="m-2">no previous knowledge necessary</li>
          </ul>
        ),
      },
      pyhsicalInteraction: {
        title: 'Fostering Digital Skills',
        description: (
          <ul className="list-disc">
            <li className="m-2">diverse riddles</li>
            <li className="m-2">research in social networks</li>
            <li className="m-2">acquisition of sensor data</li>
            <li className="m-2">visual programing</li>
            <li className="m-2">cryptography</li>
          </ul>
        ),
      },
    },
    content: {
      title: 'Individual Content',
      description: (
        <span>
          Escape games as exciting puzzle games for groups have become more and
          more popular in recent years. An individual adventure story and tricky
          tasks create a thrill. Thanks to <b>re:quest</b> it is now possible to
          develop your own Escape Games with an individual story. The special
          feature: <b>re:quest</b> is primarily aimed at educational
          institutions in order to convey their own educational content in a
          playful way and to promote digital skills at the same time. This is
          intended to strengthen digital education at extracurricular learning
          venues such as museums, libraries and student laboratories. Not only
          educational institutions, but especially children and young people
          benefit from <b>re:quests</b>. In addition to exciting adventures and
          tricky puzzles, various tasks such as data analysis, cryptography,
          data protection and privacy puzzles, programming or media analysis
          strengthen the so-called 21st Century Skills.
        </span>
      ),
    },
    editor: {
      title: 'Interactive Editor',
      description: (
        <span>
          With the <b>re:quest</b> studio, museums can create digital escape
          games thematically oriented to their individual content and locations
          and make them available to children and young people. Not only virtual
          puzzles but also real elements such as exhibits or web content from
          social networks can be included. The digital Escape Games can thus be
          designed easily freely and interactively. The <b>re:quest</b> studio
          can be used by exhibition planners, museum educators or content
          creators of the institution. A content creation and individualization
          service to integrate one´s own <b>re:quest</b> into the corporate
          identity of the institution is offered individually.
        </span>
      ),
    },
  },
}

const Home: NextPage = () => {
  const router = useRouter()
  const [lang, setLang] = useState<'de' | 'en'>('de')

  const [anim, setAnim] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setAnim(true)
    }, 500)
  }, [])

  useEffect(() => {
    if (router.locale === 'de') setLang('de')
    if (router.locale === 'en') setLang('en')
  }, [router.locale])

  return (
    <div>
      <Head>
        <title>
          re:quest - Digitale Escape Games für Bildungseinrichtungen
        </title>
        <meta
          name="description"
          content="Erstelle Digitale Escape Games für Deine Bildungseinrichtung und vermittle spielerisch Inhalte"
        />
        <meta
          property="og:title"
          content="re:quest - Digitale Escape Games für Bildungseinrichtungen"
        />
        <meta
          property="og:description"
          content="Erstelle Digitale Escape Games für Deine Bildungseinrichtung und vermittle spielerisch Inhalte"
        />
        <meta
          property="og:image"
          content={require('@/assets/logos/request-logo.svg').default.src}
        />
        <meta property="og:url" content="https://request.reedu.de/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="re:quest" />
        <link rel="icon" href="/favicon.svg" />
        <meta
          name="keywords"
          content="escape, game, room, digitale, bildung, museum"
        />
      </Head>
      <div className="mx-auto md:max-w-3xl">
        <h1
          className="bg-gradient-to-br from-flamingo-600 via-dodger-blue-500 to-emerald-600 bg-clip-text p-2 text-center text-6xl font-bold text-transparent"
          dangerouslySetInnerHTML={{ __html: i18n[lang].title }}
        ></h1>
        <Spacer />
        <h2 className="p-2 text-center text-2xl">
          <span className="font-bold">re:quest</span> {i18n[lang].subtitle}
        </h2>
        <Spacer />
        <Button
          endIcon={<ArrowRightIcon className="h-4" />}
          className="umami--click--create-request-button mx-auto"
          onClick={() => toast(i18n[lang].notWorking)}
        >
          {i18n[lang].create}
        </Button>
        <Spacer />
      </div>
      <div className="flex flex-wrap">
        <FeatureCard
          title={i18n[lang].features.adventures.title}
          color="bg-red-400"
          icon={SearchIcon}
          umamiTag="adventures-feature"
        >
          <>{i18n[lang].features.adventures.description}</>
        </FeatureCard>
        <FeatureCard
          title={i18n[lang].features.digitalEducation.title}
          color="bg-blue-400"
          icon={AcademicCapIcon}
          umamiTag="digitalEducation-feature"
        >
          <>{i18n[lang].features.digitalEducation.description}</>
        </FeatureCard>
        <FeatureCard
          title={i18n[lang].features.modular.title}
          color="bg-purple-400"
          icon={CollectionIcon}
          umamiTag="modular-feature"
        >
          <>{i18n[lang].features.modular.description}</>
        </FeatureCard>
        <FeatureCard
          title={i18n[lang].features.configure.title}
          color="bg-pink-400"
          icon={AdjustmentsIcon}
          umamiTag="configure-feature"
        >
          <>{i18n[lang].features.configure.description}</>
        </FeatureCard>
        <FeatureCard
          title={i18n[lang].features.noInstall.title}
          color="bg-orange-400"
          icon={DeviceMobileIcon}
          umamiTag="noInstall-feature"
        >
          <>{i18n[lang].features.noInstall.description}</>
        </FeatureCard>
        <FeatureCard
          title={i18n[lang].features.pyhsicalInteraction.title}
          color="bg-green-400"
          icon={PuzzleIcon}
          umamiTag="pyhsicalInteraction-feature"
        >
          <>{i18n[lang].features.pyhsicalInteraction.description}</>
        </FeatureCard>
      </div>
      <Spacer />
      <Link href={'/faq'} passHref locale={lang}>
        <Button
          endIcon={<ArrowRightIcon className="h-4" />}
          className="mx-auto"
        >
          {i18n[lang].moreInformation}
        </Button>
      </Link>
      <Spacer size="xl" />
      <h2 className="p-2 text-center text-4xl font-bold">
        {i18n[lang].editor.title}
      </h2>
      <Spacer size="lg" />
      <div className="flex flex-wrap items-center">
        <div className="flex-1 basis-full lg:basis-1/2">
          <p className="lg:mr-4">{i18n[lang].editor.description}</p>
        </div>

        <div className="w-full flex-1 basis-full rotate-1 p-4 lg:basis-1/2 xl:translate-x-12 2xl:w-[120%] 2xl:translate-x-24">
          <div className="overflow-hidden rounded-2xl border-2 border-zinc-200">
            <div className="bg-zinc-200 p-2">
              <p className="rounded-full bg-zinc-300 py-1 text-center text-sm text-black md:mx-20">
                re:quest Studio
              </p>
            </div>
            <img
              className="px-8"
              src={require('@/assets/studio.png').default.src}
            />
          </div>
        </div>
      </div>
      <Spacer size="xl" />
      <h2 className="p-2 text-center text-4xl font-bold">
        {i18n[lang].content.title}
      </h2>
      <Spacer size="lg" />
      <div className="flex flex-wrap items-center">
        <div className="w-full flex-1 basis-full -rotate-1 p-4 lg:basis-1/2 xl:-translate-x-12 2xl:w-[120%] 2xl:-translate-x-24">
          <div className="overflow-hidden rounded-2xl border-2 border-zinc-200">
            <div className="bg-zinc-200 p-2">
              <p className="mx-20 rounded-full bg-zinc-300 py-1 text-center text-sm text-black">
                re:quest Studio
              </p>
            </div>
            <img
              // className="px-8"
              src={require('@/assets/quest-2.png').default.src}
            />
          </div>
        </div>
        <div className="flex-1 basis-full lg:basis-1/2">
          <p>{i18n[lang].content.description}</p>
        </div>
      </div>
      <Spacer size="xl" />
      <h2 className="p-2 text-center text-4xl font-bold">
        {i18n[lang].interested}
      </h2>
      <Spacer size="xl" />
      <p>{i18n[lang].stayTuned}</p>
      {lang === 'de' ? (
        <JotformEmbed src="https://form.jotformeu.com/221502755387054" />
      ) : (
        <JotformEmbed src="https://form.jotform.com/221522956013348" />
      )}
      <Spacer size="xl" />
      <div className="text-center">
        <h2 className="p-2 text-center  font-bold">Powered by</h2>
        <div className="umami--click--reedu-image-link relative mx-auto h-72 w-72 cursor-pointer transition-all hover:scale-105">
          <Link href={'https://reedu.de'} passHref>
            <Image
              src={require('@/assets/reedu.svg')}
              layout="fill"
              alt="reedu"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
