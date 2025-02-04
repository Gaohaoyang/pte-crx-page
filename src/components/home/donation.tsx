'use client'

import React from 'react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@heroui/react'
import donationData, { LAST_UPDATED } from './donation-data'

const Donation = () => {
  return (
    <div className="mt-20">
      <h2 className="mb-6 text-3xl font-bold">Donation</h2>
      <p>
        If you found this helpful, feel free to sponsor me for a cup of coffee!
        ☕ :) I really appreciate it.
      </p>
      <p>Have a great day! Your name will appear on the donation list. ❤️</p>
      <p className="mb-2 mr-2 mt-2 text-right text-sm text-gray-500 dark:text-gray-300">
        Last updated: {LAST_UPDATED}
      </p>
      <Table isStriped aria-label="Donation table" className="w-full">
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>DATE</TableColumn>
          <TableColumn>AMOUNT</TableColumn>
          <TableColumn>METHOD</TableColumn>
          <TableColumn>MESSAGE</TableColumn>
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
      <p>You can support me through the following methods.</p>
    </div>
  )
}

export default Donation
