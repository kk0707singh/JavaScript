/*
JAVASCRIPT : 1.SYNCHRONOUS: Code runs sequentially, one statement after another.
             2.SINGLE THREADED: Executes one task at a time on a single thread.

JAVASCRIPT EXECUTION CONTEXT:
             1.GLOBAL EXECUTION CONTEXT (THIS)
                YE PURA THREAD KE ANDAR EXECUTE HOTE H
             2.FUNCTION EXECUTION CONTEXT
             3. EVAL EC



HOW JAVASCRIPT CODE EXECUTES
             RUNS ON TWO PHASES
             1.MEMORY CREATION PHASE/CREATION PHASE
             2.EXECUTION PHASE
*/


let val1 = 10
let val2 = 20
function addNum(num1, num2) {
    let total = num1+num2
    return total
    
}
let result1 = addNum(val1, val2)
let result2 = addNum(10,2)


/*
1.GLOBAL EXECUTION ALLOCATE HOGA THIS KE ANDAR

2.MEMORY CREATION PHASE(SAARE VARIBLES KO IKATHHA KRKE BUS RKHA JAATA HAI)
    VAL1: UNDEFINED
    VAL2: UNDEFINED
    ADDNUM: DEFINATION
    RESULT1: UNDEFINED
    RESULT2: UNDEFINED
    FIRST CYCLE COMPLETED

3.EXECUTION PHASE
    VAL1: 10
    VAL2: 20
    ADDNUM: JITTI BAAR YE FUNCTIONS EXECUTE HOTE H UTNI BAAR EK NYA BOX CREATE HOTA H AUR USKO HUM BOLTE HAI NEW EXECUTIONAL CONTEXT
    ------------------------NEW VARIABLE ENVIRONMENT+EXECUTION THREAD----------------------
            1.MEMORY PHASE: 
                VAL1: UNDEFINED
                VAL2: UNDEFINED
                TOTAL: UNDEFINED

            2.EXEUTION PHASE
                NUM1: 10
                NUM2: 20
                TOTAL: 30 RETURN KREGA GLOBAL EXECUTION CONTEXT

                ITNA KAAM HONE KE BAAD YE DELETE  BHI HOGA
    

    RESULT1: 30
    RESULT2:
    ------------------------NEW VARIABLE ENVIRONMENT+EXECUTION THREAD----------------------
            1.MEMORY PHASE
            2.EXECUTION CONTEXT




--------------------------------------------:CALL STACK:-----------------------------------
GLOBAL EXECUTION: LIFO PE KAAM KRTA HAI 







PART2 JAVASCRIPT ONE SHOT

JAVASCRIPT : 1.SYNCHRONOUS: Code runs sequentially, one statement after another.
             2.SINGLE THREADED: Executes one task at a time on a single thread.

            
EXECUTIONAL CONTEXT:
            1.EXECUTES ONE LINE OF CODE AT A TIME
                EACH OPERATION WAITS FOR THE LAST ONE TO COMPLATE BEFORE EXECUTING
            

----------------------->BLOCKING CODE           VS            NON BLOCKING CODE<----------------------------
BLOCK THE FLOW OF DIAGRAM                                    : DOES'NT BLOCK EXECUTION
READ FILE SYNC                                               : READ FILE ASYNC


*/