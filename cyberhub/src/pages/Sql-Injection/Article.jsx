import React from 'react';
import { Link } from 'react-router-dom';
import AttackPagesHeader from '../../components/AttackPagesHeader/AttackPagesHeader';

const Article = () => {
  return (
    <div style={{ 
      backgroundColor: '#151B3B',
      color: '#fff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <AttackPagesHeader pageType="sql" />
      <div style={{
        padding: '40px',
        fontFamily: 'Georgia, serif'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{ 
            color: '#5DADE2', 
            fontSize: '48px',
            marginBottom: '30px',
            textAlign: 'center'
          }}>
            Understanding SQL Injection Attacks
          </h1>

          {/* Definition Section */}
          <div style={{
            backgroundColor: '#1a2147',
            padding: '30px',
            borderRadius: '10px',
            marginBottom: '30px',
            border: '1px solid #5DADE2'
          }}>
            <h2 style={{ 
              color: '#5DADE2',
              fontSize: '28px',
              marginBottom: '20px'
            }}>What is SQL Injection?</h2>

            <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px' }}>
              SQL Injection (SQLi) is a type of web security vulnerability that allows an attacker to interfere with the SQL queries that an application makes to its database. By inserting malicious SQL code into input fields, attackers can manipulate the database to access, modify, or delete data they shouldn't have access to.
            </p>

            <div style={{
              backgroundColor: '#151B3B',
              padding: '20px',
              borderRadius: '5px',
              fontSize: '18px'
            }}>
              <strong style={{ color: '#F1C40F' }}>Key Point:</strong> SQL injection attacks can lead to unauthorized data access, data manipulation, and in severe cases, complete system compromise.
            </div>
          </div>

          {/* Attack Types Section */}
          <div style={{
            backgroundColor: '#1a2147',
            padding: '30px',
            borderRadius: '10px',
            marginBottom: '30px',
            border: '1px solid #5DADE2'
          }}>
            <h2 style={{ 
              color: '#5DADE2',
              fontSize: '28px',
              marginBottom: '20px'
            }}>Types of SQL Injection</h2>

            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ color: '#F1C40F', marginBottom: '15px', fontSize: '24px' }}>
                1. Error-Based (Classic) SQL Injection
              </h3>
              <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '15px' }}>
                This technique relies on error messages returned by the database server to gather information about the database structure. Attackers deliberately cause errors to extract data through error messages. It is one of the oldest and most straightforward SQL injection methods.
              </p>
              <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '15px' }}>
                Classic SQL Injection attacks often exploit poorly handled input validation and can reveal database schema details, table names, and even data content through error messages.
              </p>
              <div style={{
                backgroundColor: '#151B3B',
                padding: '15px',
                borderRadius: '5px',
                fontSize: '16px'
              }}>
                Example: ' OR '1'='1' -- (Forces database to return error with valuable information)
              </div>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ color: '#F1C40F', marginBottom: '15px', fontSize: '24px' }}>
                2. Union-Based SQL Injection
              </h3>
              <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '15px' }}>
                Uses the UNION SQL operator to combine the results of two or more SELECT statements into a single result. This allows attackers to retrieve data from different database tables. This method requires the number and data types of columns in the SELECT statements to match.
              </p>
              <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '15px' }}>
                Union-based attacks are powerful for extracting data from multiple tables in a single query, often bypassing some input validation mechanisms.
              </p>
              <div style={{
                backgroundColor: '#151B3B',
                padding: '15px',
                borderRadius: '5px',
                fontSize: '16px'
              }}>
                Example: ' UNION SELECT username, password FROM users--
              </div>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ color: '#F1C40F', marginBottom: '15px', fontSize: '24px' }}>
                3. Blind SQL Injection
              </h3>
              <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '15px' }}>
                Used when the application doesn't display database error messages. Attackers must use true/false queries and timing delays to infer information about the database. This method is stealthier and harder to detect.
              </p>
              <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '15px' }}>
                There are two main types of blind SQL injection:
              </p>
              <ul style={{ fontSize: '18px', lineHeight: '1.6', listStyle: 'disc', marginLeft: '20px', marginBottom: '15px' }}>
                <li><strong>Boolean-based (content-based):</strong> The attacker sends queries that result in true or false responses, allowing them to infer data based on the application's response.</li>
                <li><strong>Time-based:</strong> The attacker sends queries that cause delays in the database response, using the timing to infer information.</li>
              </ul>
              <div style={{
                backgroundColor: '#151B3B',
                padding: '15px',
                borderRadius: '5px',
                fontSize: '16px'
              }}>
                Example Boolean-based: ' AND 1=1-- (returns true)<br />
                Example Time-based: ' WAITFOR DELAY '00:00:05'-- (delays response by 5 seconds)
              </div>
            </div>
          </div>

          {/* Impact Section */}
          <div style={{
            backgroundColor: '#1a2147',
            padding: '30px',
            borderRadius: '10px',
            marginBottom: '30px',
            border: '1px solid #5DADE2'
          }}>
            <h2 style={{ 
              color: '#5DADE2',
              fontSize: '28px',
              marginBottom: '20px'
            }}>Potential Impact</h2>

            {/* Real-World Examples Section */}
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ color: '#F1C40F', marginBottom: '15px', fontSize: '24px' }}>
                Real-World Examples of SQL Injection Attacks
              </h3>
              <ul style={{ 
                fontSize: '18px',
                lineHeight: '1.6',
                listStyle: 'disc',
                marginLeft: '20px',
                marginBottom: '20px'
              }}>
                <li><strong>2008 Heartland Payment Systems Breach:</strong> Attackers exploited SQL Injection vulnerabilities to steal millions of credit card numbers.</li>
                <li><strong>2012 LinkedIn Data Breach:</strong> SQL Injection was used to access user passwords and personal information.</li>
                <li><strong>2014 Sony Pictures Hack:</strong> SQL Injection was one of the methods used to gain unauthorized access to sensitive data.</li>
                <li><strong>2017 Equifax Breach:</strong> Although primarily due to a different vulnerability, SQL Injection was also reported as a contributing factor in some attack vectors.</li>
              </ul>
            </div>

            <ul style={{ 
              fontSize: '18px',
              lineHeight: '1.6',
              listStyle: 'disc',
              marginLeft: '20px'
            }}>
              <li>Unauthorized access to sensitive data</li>
              <li>Modification or deletion of database records</li>
              <li>Execution of administrative operations</li>
              <li>Compromise of underlying server</li>
              <li>Data breach and information theft</li>
              <li>Bypass of authentication mechanisms</li>
            </ul>
          </div>

          {/* Prevention Methods */}
          <div style={{
            backgroundColor: '#1a2147',
            padding: '30px',
            borderRadius: '10px',
            marginBottom: '30px',
            border: '1px solid #5DADE2'
          }}>
            <h2 style={{ 
              color: '#5DADE2',
              fontSize: '28px',
              marginBottom: '20px'
            }}>Prevention Methods</h2>

            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ color: '#F1C40F', marginBottom: '15px', fontSize: '20px' }}>
                1. Input Validation
              </h3>
              <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Validate and sanitize all user inputs before processing them.
              </p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ color: '#F1C40F', marginBottom: '15px', fontSize: '20px' }}>
                2. Prepared Statements
              </h3>
              <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Use parameterized queries to separate SQL logic from data.
              </p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ color: '#F1C40F', marginBottom: '15px', fontSize: '20px' }}>
                3. Least Privilege
              </h3>
              <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Use database accounts with minimal required permissions.
              </p>
            </div>

            <div>
              <h3 style={{ color: '#F1C40F', marginBottom: '15px', fontSize: '20px' }}>
                4. WAF Implementation
              </h3>
              <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Deploy Web Application Firewalls to detect and block SQL injection attempts.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '40px'
          }}>
            <Link 
              to="/Sql-Injection/HomePage"
              style={{
                backgroundColor: '#F1C40F',
                color: '#000',
                padding: '15px 30px',
                borderRadius: '5px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <span style={{ fontSize: '20px' }}>←</span>
              SQL Home Page
            </Link>
            <Link 
              to="/"
              style={{
                backgroundColor: '#5DADE2',
                color: '#fff',
                padding: '15px 30px',
                borderRadius: '5px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <span style={{ fontSize: '20px' }}>🏠</span>
              Return to Home
            </Link>
            <Link 
              to="/Sql-Injection/InitialQuiz"
              style={{
                backgroundColor: '#F1C40F',
                color: '#000',
                padding: '15px 30px',
                borderRadius: '5px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              Start The Quiz
              <span style={{ fontSize: '20px' }}>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
