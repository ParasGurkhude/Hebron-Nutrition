import { Button } from '@chakra-ui/react'
import React from 'react'

export const Footer = () => {
  return (
    <div id='footer'>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Why shop with us?</td>
                    </tr>
                    <tr>
                        <td>Shipping</td>
                    </tr>
                    <tr>
                        <td>Returns</td>
                    </tr>
                    <tr>
                        <td>About us</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
        <table>
                <thead>
                    <tr>
                        <th>Security & Privacy</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Secure Website</td>
                    </tr>
                    <tr>
                        <td>PCI Compliance</td>
                    </tr>
                    <tr>
                        <td>Privacy Policy</td>
                    </tr>
                    <tr>
                        <td>Terms of service</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            <thead>
                <tr>
                    <th>Security & Privacy</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Invite customers to join your mailing list.</td>
                </tr>
                <tr>
                    <td> <input placeholder='Email Address'/><br/> </td>
                </tr>
                <tr>
                    <td> <Button>Sign up</Button></td>
                </tr>
                
                
            </tbody>
        </div>
        <div>
            <p>
                Statements made on this website
                have not been evaluated by the U.S.
                Food and Drug Administration.
                These products are not intended to
                diagnose, treat, cure or prevent any
                disease. Information provided by
                this website or this company is not a
                substitute for individual medical
                advice.
            </p>
        </div>
    </div>
  )
}
