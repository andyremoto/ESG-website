---
title: 'Whitepaper - Estruturart Golden (ESG)'
description: 'Complete technical documentation of Estruturart Golden (ESG) token, a digital token backed by certified gold'
---

# Whitepaper - Estruturart Golden (ESG)

## Executive Summary

Estruturart Golden (ESG) is a digital token backed by certified physical gold, issued on the Polygon blockchain. Each Estruturart Golden (ESG) token represents exactly **1 gram of gold** stored in regulated institutional custody.

## Overview

### Purpose

Democratize access to the gold market through tokenization, offering:

- **24/7 Liquidity**: Trade anytime
- **Fractional Ownership**: Acquire minimal gold fractions
- **Transparency**: All operations verifiable on-chain
- **Security**: Regulated custody and multisig governance

### Key Features

- **Standard**: ERC-20
- **Blockchain**: Polygon (PoS)
- **Decimals**: 18
- **Backing**: 1 Estruturart Golden (ESG) = 1 gram of certified gold

## Technical Architecture

### Smart Contract

The Estruturart Golden (ESG) contract implements the ERC-20 standard with additional security and governance features:

#### Core Functions
- **Mint**: Issuance of new tokens upon proof of gold acquisition and custody
- **Burn**: Token burning upon physical gold redemption
- **Transfer**: Standard ERC-20 transfers
- **Approve/TransferFrom**: Transfer delegation

#### Security Features
- **Pause**: Ability to pause all transfers in emergencies
- **Blacklist**: List of blocked addresses for regulatory reasons
- **Multisig**: Critical operations require multiple signatures via Safe (Gnosis Safe)

### Governance

Estruturart Golden (ESG) governance is managed through a Safe multisig with the following signatories:

- Estruturart (2 signatures)
- Independent Custodian (1 signature)
- External Audit (1 signature)

**Threshold**: 3 of 4 signatures required for critical operations.

## Backing and Custody

### Acquisition Process

1. **Acquisition**: Certified gold is acquired in the physical market
2. **Certification**: Validation of authenticity and weight
3. **Custody**: Storage in regulated institutional vault
4. **Tokenization**: Issuance of corresponding Estruturart Golden (ESG) tokens

### Audit

- **Frequency**: Quarterly
- **Scope**: Physical validation of gold in custody
- **Publication**: Public reports available on this website

### Certifications

All gold in custody has:
- Certificate of authenticity
- Complete origin traceability
- Compliance with international standards (LBMA)

## Mint and Burn Policy

### Mint (Issuance)

New tokens can only be issued when:
1. Corresponding physical gold has been acquired
2. Gold has been deposited in custody
3. Audit confirmed the deposit
4. Multisig approved the issuance

### Burn

Tokens can be burned when:
1. Holder requests physical gold redemption
2. KYC/AML process approved
3. Redemption fee paid
4. Gold withdrawn from custody and delivered

## Risks and Mitigations

### Identified Risks

1. **Custody Risk**: Custodian failure
   - **Mitigation**: Full insurance, regulated custodian

2. **Contract Risk**: Smart contract vulnerabilities
   - **Mitigation**: Regular security audits

3. **Regulatory Risk**: Changes in legislation
   - **Mitigation**: Continuous compliance, specialized legal counsel

4. **Market Risk**: Gold price volatility
   - **Mitigation**: N/A (token tracks gold price)

## Regulatory Compliance

Estruturart Golden (ESG) operates in compliance with:
- Brazilian digital asset regulations
- Anti-money laundering (AML) standards
- Know Your Customer (KYC) requirements
- Precious metals regulations

## Roadmap

### Q1 2024
- ✅ Smart contract development
- ✅ First security audit
- ✅ Custody establishment

### Q2 2024
- ✅ Polygon mainnet deployment
- ✅ First token issuance
- 🔄 Exchange integration

### Q3 2024
- 🔄 Partnership expansion
- 🔄 Decentralized governance implementation
- 📅 Tier-1 exchange listing

### Q4 2024
- 📅 Internationalization
- 📅 New Estruturart Golden (ESG)-based products
- 📅 Holder rewards program

## Conclusion

Estruturart Golden (ESG) offers a modern, secure, and accessible way to invest in gold. With full transparency, decentralized governance, and institutional custody, Estruturart Golden (ESG) represents the natural evolution of the gold market for the digital era.

---

**Version**: 1.0
**Date**: October 2024

## Contact

**Phone**: (31) 3309-7422
**Email**: estruturart@estruturart.com.br
**Address**: R. Paraíba, 550 - Sl 900 - 9º andar
Savassi - Belo Horizonte - MG
ZIP: 30130-141

---

## Attachments

### Legal Documents

📄 [**Download Share Assignment and Transfer Agreement (PDF)**](/documentation/MINUTA_CONTRATO_DE_CESSÃO_E_TRANSFERÊNCIA_DE_COTAS_150525%20-%20ESTRUTURART.pdf)

This document establishes the legal terms and conditions for the assignment and transfer of shares related to the gold backing of the Estruturart Golden (ESG) token.
