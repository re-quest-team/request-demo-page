/* eslint-disable @next/next/no-img-element */
import {
  ArrowUpIcon,
  ChartSquareBarIcon,
  CodeIcon,
  LockClosedIcon,
  MenuAlt1Icon,
  PhotographIcon,
  PlusCircleIcon,
  QrcodeIcon,
} from '@heroicons/react/outline'
import { useRef, useState } from 'react'
import { ArrowUpRight, Instagram, Youtube } from 'react-feather'
import { Button, PillButton } from '../Elements/Button'
import { InputField } from '../Elements/FormElements'
import { Spacer } from '../Elements/Spacer'
import AddQuestButton from './AddQuestButton'
import Modal from '../Modal'
import QuestElement from './QuestElement'

type QuestImagePlacerProps = {
  img: string
  maxQuests?: number
}

type QuestButton = {
  x: number
  y: number
}

const QuestImagePlacer = ({ img, maxQuests = 3 }: QuestImagePlacerProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [quests, setQuests] = useState<QuestButton[]>([])

  const [editMode, setEditMode] = useState(true)

  const [modalOpen, setModalOpen] = useState(false)
  const [taskModalOpen, setTaskModalOpen] = useState(false)

  const [encrypted, setEncrypted] = useState('')

  return (
    <div>
      <Button
        size="xs"
        className="ml-auto"
        onMouseDown={() => setEditMode(false)}
        onMouseUp={() => setEditMode(true)}
      >
        Vorschau
      </Button>
      <Spacer size="xs" />
      <div
        className={`relative mx-auto w-full max-w-6xl overflow-visible ${
          editMode && quests.length < maxQuests && 'cursor-crosshair'
        }`}
        ref={ref}
      >
        <img
          className="select-none rounded shadow"
          src={img}
          onClick={e => {
            if (editMode && quests.length < maxQuests) {
              setModalOpen(true)
              setQuests([
                ...quests,
                {
                  // @ts-ignore
                  x:
                    (e.clientX - ref.current?.getBoundingClientRect().left!) /
                    ref.current?.clientWidth!,
                  // @ts-ignore
                  y:
                    (e.clientY - ref.current?.getBoundingClientRect().top!) /
                    ref.current?.clientHeight!,
                },
              ])
            }
          }}
          alt="upload"
          onDrop={e => e.preventDefault()}
          onDragOver={e => e.preventDefault()}
        />
        <div
          className={`pointer-events-none absolute left-0 top-0 flex h-full w-full items-center justify-center transition-all ${
            editMode && 'bg-black bg-opacity-40'
          }`}
        >
          {editMode && quests.length === 0 && (
            <>
              <div className="relative m-auto flex flex-col items-center">
                <PlusCircleIcon className="mb-4 h-10 w-10" />
                <p className="font-semibold">
                  Klicke auf das Bild um R??tsel hinzuzuf??gen
                </p>
              </div>
              <div className="absolute top-0 right-0 flex max-w-sm content-end items-end p-4">
                <p className="mr-2 text-sm">
                  Halte den Vorschau Button gedr??ckt um eine Vorschau deines
                  Raumes zu sehen
                </p>
                <ArrowUpRight className="h-10 w-12" />
              </div>
            </>
          )}
          {quests?.map((q, i) => (
            <AddQuestButton
              dragRef={ref}
              {...q}
              onMoveEnd={movedQuest =>
                setQuests([
                  ...quests.filter((e, index) => index !== i),
                  movedQuest,
                ])
              }
              onDelete={() =>
                setQuests([...quests.filter((e, index) => index !== i)])
              }
              key={i}
              showDelete={editMode}
              onClick={() => setModalOpen(true)}
            />
          ))}
        </div>
      </div>
      <Spacer />
      <PillButton variant="secondary" className="mx-auto">
        {quests.length} von {maxQuests} R??tseln
      </PillButton>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Element hinzuf??gen"
      >
        <>
          <PillButton variant="secondary" className="mx-auto">
            R??tsel
          </PillButton>
          <QuestElement
            title="Krypto&shy;graphie"
            description="Hier muss ein Codewort entschl??sselt werden"
            icon={LockClosedIcon}
            variant="secondary"
            onClick={() => {
              setModalOpen(false)
              setTimeout(() => {
                setTaskModalOpen(true)
              }, 100)
            }}
          />
          <QuestElement
            title="Programmieren"
            description="Hier muss ein kleines Programm geschrieben werden"
            icon={CodeIcon}
            variant="secondary"
            onClick={() => {
              setModalOpen(false)
              setTimeout(() => {
                setTaskModalOpen(true)
              }, 100)
            }}
          />
          <QuestElement
            title="QR-Code Scan"
            description="Hier muss ein QR-Code gescannt werden"
            icon={QrcodeIcon}
            variant="secondary"
            onClick={() => {
              setModalOpen(false)
              setTimeout(() => {
                setTaskModalOpen(true)
              }, 100)
            }}
          />
          <QuestElement
            title="Statistik"
            description="Hier muss eine Tabelle analysiert werden"
            icon={ChartSquareBarIcon}
            variant="secondary"
            onClick={() => {
              setModalOpen(false)
              setTimeout(() => {
                setTaskModalOpen(true)
              }, 100)
            }}
          />
          <Spacer />
          <PillButton className="mx-auto" variant="tertiary">
            Medien
          </PillButton>
          <QuestElement
            title="Text"
            description="Ein einfacher Text"
            icon={MenuAlt1Icon}
            variant="tertiary"
            onClick={() => {}}
          />
          <QuestElement
            title="Bild"
            description="Zeige ein Bild"
            icon={PhotographIcon}
            variant="tertiary"
            onClick={() => {}}
          />
          <QuestElement
            title="Instagram"
            description="Ein Instagram Post"
            icon={Instagram}
            variant="tertiary"
            onClick={() => {}}
          />
          <QuestElement
            title="YouTube"
            description="Ein YouTube Video"
            icon={Youtube}
            variant="tertiary"
            onClick={() => {}}
          />
          <QuestElement
            title="iFrame"
            description="Eine Website"
            icon={CodeIcon}
            variant="tertiary"
            onClick={() => {}}
          />
        </>
      </Modal>
      <Modal
        open={taskModalOpen}
        onClose={() => setTaskModalOpen(false)}
        title="Kryptographie"
      >
        <div>
          <InputField label="Aufgabenstellung"></InputField>
          <InputField
            label="Codewort"
            onChange={e => setEncrypted(e.target.value)}
          ></InputField>
          <InputField
            label="Verschl??sseltes Wort"
            disabled
            value={encrypted.replace(
              /[A-Z]/gi,
              c =>
                'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'[
                  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.indexOf(
                    c,
                  )
                ],
            )}
          ></InputField>
          <Button variant="primary" onClick={() => setTaskModalOpen(false)}>
            Speichern
          </Button>
        </div>
      </Modal>
    </div>
  )
}

export default QuestImagePlacer
