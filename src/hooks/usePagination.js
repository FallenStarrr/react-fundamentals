import React, { useState, useMemo, useEffect } from "react"

export const usePagination = (totalPages) => {
    let result = []
   
        for (let i = 0; i < totalPages; i++) {
          result.push(i + 1)
        
      }  
   return result   
}