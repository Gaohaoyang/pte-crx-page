'use client'

import React from 'react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Card,
  CardHeader,
  CardBody,
  Image,
} from '@heroui/react'
import donationData, { LAST_UPDATED } from './donation-data'
import DonationMethods from './donation-methods'
import { useTranslation } from 'react-i18next'

const Donation = () => {
  const { t } = useTranslation('home')
  return (
    <div className="mt-20">
      <h2 className="mb-6 text-3xl font-bold">{t('Donation')}</h2>
      <p>
        {t(
          'If you found this helpful, feel free to sponsor me for a cup of coffee! ☕ :) I really appreciate it.',
        )}
      </p>
      <p>
        {t('Have a great day! Your name will appear on the donation list. ❤️')}
      </p>
      <p className="mb-2 mr-2 mt-2 text-right text-sm text-gray-500 dark:text-gray-300">
        {t('Last updated:')} {LAST_UPDATED}
      </p>
      <Table isStriped aria-label="Donation table" className="w-full">
        <TableHeader>
          <TableColumn>{t('Name')}</TableColumn>
          <TableColumn>{t('Date')}</TableColumn>
          <TableColumn>{t('Amount')}</TableColumn>
          <TableColumn>{t('Method')}</TableColumn>
          <TableColumn>{t('Message')}</TableColumn>
        </TableHeader>
        <TableBody>
          {donationData.map((donation, index) => (
            <TableRow key={index}>
              <TableCell>{donation.name}</TableCell>
              <TableCell>{donation.date}</TableCell>
              <TableCell>{donation.amount}</TableCell>
              <TableCell>
                <div dangerouslySetInnerHTML={{ __html: donation.method }} />
              </TableCell>
              <TableCell>{donation.message || '-'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <p className="mt-4">
        {t('You can support me through the following methods.')}
      </p>
      <div className="mt-4 flex flex-wrap gap-4">
        {DonationMethods.map((method) => (
          <Card className="w-full pb-2 sm:w-auto" key={method.name}>
            <CardHeader className="flex-col items-center px-4 pb-0">
              <div className="flex items-center gap-1">
                {method.logo && (
                  <Image
                    alt={method.name}
                    className="rounded-none object-cover"
                    src={method.logo}
                    width={30}
                  />
                )}
                <h4 className="text-center text-large font-bold">
                  {method.name
                    .split(/<i>|<\/i>/)
                    .map((part, index) =>
                      index % 2 === 1 ? <i key={index}>{part}</i> : part,
                    )}
                </h4>
              </div>
              <p className="">{method.description}</p>
            </CardHeader>
            <CardBody className="flex flex-col items-center overflow-visible py-2">
              <Image
                alt={method.name}
                className="rounded-none object-cover"
                src={method.mainPic}
                width={method.picWidth}
              />
              {method.link && (
                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-sm text-blue-500 dark:text-blue-400"
                >
                  {method.linkText}
                </a>
              )}
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Donation
